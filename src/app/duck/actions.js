
import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    frameSize: ['value'],
    bikeType: ['value'],
    requestFrameJson: ['frame'],
    receiveFrameJson: ['frameData'],
    showFrameComponent: ['value'],
    showFrameSizeComponent: ['value'],
    wheelsSize: ['value'],
    showWheelsSizeComponent: ['value'],
    requestManufacturerJson: ['manufacturer'],
    receiveManufacturerJson: ['manufacturersData'],
    requestForkJson: ['fork'],
    receiveForkJson: ['forkData'],
    showForkComponent: ['value']
});

export { Creators, Types };
