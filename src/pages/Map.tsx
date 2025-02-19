import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Dravers from '../components/Drawer/Drawers.tsx';

declare const ymaps: any; // Указываем, что `ymaps` будет доступен глобально

function Map() {
    const data = useSelector((state: RootState) => state.hotels.data);
    const selectedHotel = useSelector((state: RootState) => state.hotels.selectedHotel);

    const [cord, setCord] = useState<[number, number]>([55.76, 37.64]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedHotelData, setSelectedHotelData] = useState<any>(null);

    useEffect(() => {
        if (selectedHotel?.geoCode?.latitude && selectedHotel?.geoCode?.longitude) {
            setCord([selectedHotel.geoCode.latitude, selectedHotel.geoCode.longitude]);
        }
    }, [selectedHotel]);

    useEffect(() => {
        if (!data) return;

        const locations = data.map(({ geoCode, ...hotel }) => {
            const { latitude, longitude } = geoCode;
            return { coords: [latitude, longitude], hotel };
        });

        ymaps.ready(init);

        function init() {
            const myMap = new ymaps.Map("map", {
                center: cord,
                zoom: 7,
                controls: []
            });

            locations.forEach(({ coords, hotel }) => {
                const placemark = new ymaps.Placemark(coords);

                placemark.events.add('click', () => {
                    setSelectedHotelData(hotel);
                    setOpenDrawer(true);
                });

                myMap.geoObjects.add(placemark);
            });
        }
    }, [data]);

    return (
        <>
            <div style={{ width: '1150px', height: '600px', marginBottom: '40px' }} id="map"></div>
            <Dravers visible={openDrawer} onClose={() => setOpenDrawer(false)} hotel={selectedHotelData} />
        </>
    );
}

export default Map;
