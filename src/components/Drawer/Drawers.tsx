import { Drawer, Button, Radio, Space } from 'antd';
import { useState } from 'react';

export default function Drawers({visible, setVisible,}) {
  // const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<'top' | 'right' | 'bottom' | 'left'>('left');

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  const onChange = (e: any) => setPlacement(e.target.value);


  return (
    <>
      <Space>
        <Radio.Group defaultValue={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={visible}  // Изменил `visible` на `open` (в Ant Design v4+)
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
