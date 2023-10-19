import { TimeFormatBuilderUnResolved } from './Builders.mjs';
const TimeFormatBuilderData = new TimeFormatBuilderUnResolved();

const TimeFormatBuilder = {
    GetTimeFormat: TimeFormatBuilderData.GetTimeFormat,
    GetDefaultTimeFormat: TimeFormatBuilderData.GetDefaultTimeFormat,
    toJSON: TimeFormatBuilderData.toJSON
};

export { TimeFormatBuilder };