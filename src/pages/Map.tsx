import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Drawer, Modal } from 'antd';
import { setSelectedHotel } from '../store/slice/hotels.ts';
import ModalComponent from '../components/Modal/Modal.tsx';

declare const ymaps: any; // Указываем, что `ymaps` будет доступен глобально

function Map() {
    const data = useSelector((state: RootState) => state.hotels.data);
    const selectedHotel = useSelector((state: RootState) => state.hotels.selectedHotel);
    const coords = selectedHotel? [selectedHotel.geoCode.latitude, selectedHotel.geoCode.longitude]  :  [55.76, 37.64]
    const zoom = selectedHotel? 13  :  2
    const mapInstance = useRef(null)
    // const [open, setOpen] = useState(!!selectedHotel)

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (mapInstance?.current && selectedHotel?.geoCode?.latitude && selectedHotel?.geoCode?.longitude) {
            // mapInstance.current.panTo(coords)
            // mapInstance.current.setZoom(13)
            mapInstance.current.setCenter(coords, 13)
        }
    }, [selectedHotel]);


    useEffect(() => {
        if (!data) return;

        ymaps.ready(init);

        function init() {
            mapInstance.current = new ymaps.Map("map", {
                center: coords,
                zoom: zoom,
                controls: []
            });

            data?.forEach((item) => {
                const {latitude, longitude} = item.geoCode
                const placemark = new ymaps.Placemark([latitude, longitude]);

                placemark.events.add('click', () => {
                    dispatch(setSelectedHotel(item))
                    // showDrawer();
                });

                mapInstance.current?.geoObjects.add(placemark);
            });
        }
    }, [data]);

    const onClose = () => {
        // setOpen(false);
        dispatch(setSelectedHotel(null))
    };

    // const showDrawer = () => {
    //     setOpen(true);
    // };

      const [modalIsOpen, setModalIsOpen] = useState(false);

      const openModal = () => setModalIsOpen(true);

    return (
        <>
            <div style={{ width: '1150px', height: '600px', marginBottom: '40px', position: 'relative', overflow: 'hidden' }} id="map">
                <Drawer
                    title="Basic Drawer"
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    open={!!selectedHotel}
                    getContainer={false}
                >
                    <p>Страна: {selectedHotel?.address.countryCode}</p>
                    <p>Адрес: {selectedHotel?.address.cityName}</p>
                    <p>Название отеля: {selectedHotel?.name}</p>
                    <button onClick={openModal} style={{cursor: 'pointer',  backgroundColor: 'transparent',  color: '#CC9933',   border: '1px solid #CC9933',   padding: '13px 20px'}}>Забронировать отель</button>
                </Drawer>
            </div>
            {modalIsOpen === true ? <ModalComponent/> : ''}
        </>
    );
}

export default Map;