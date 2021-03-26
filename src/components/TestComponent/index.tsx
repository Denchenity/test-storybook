import React from 'react';
import { ComponentWrapper } from './index.styled';
import { Switch } from 'antd';
import  '../../styles/switcher.less';

const TestComponent: React.FC = () => {
  return <ComponentWrapper>
    <div className="container">
      <div className="wrapper">
        <div className="switcher">
          <div className="text">Нет</div>
            <Switch/>
        </div>
        <div className="switcher">
          <div className="text">
            Да
          </div>
            <Switch defaultChecked/>
        </div>
      </div>
    </div>
  </ComponentWrapper>;
};

export default TestComponent;
