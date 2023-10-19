 class TimeFormatBuilderUnResolved {
    constructor(data = {}) {
        this.time = data.time;
    }
    GetTimeFormat(timeFormat) {
        this.time = TimeFormatBuilderUnResolved.generateTimeFormat(timeFormat);
        return this.time;
    }
    GetDefaultTimeFormat(nullValue) {
        void nullValue;
        this.time = TimeFormatBuilderUnResolved.generateTimeFormat(12);
        return this.time;
    }
    toJSON(input) {
        var selectedTimeValue = undefined;
        var defaultTimeValue = undefined;
        if(input) {
            this.time = TimeFormatBuilderUnResolved.generateTimeFormat(input);
            selectedTimeValue = this.time;
        }
        defaultTimeValue = TimeFormatBuilderUnResolved.generateTimeFormat(12);
        const JSON = {
            selectedTimeFormat: selectedTimeValue,
            defaultTimeFormat: defaultTimeValue
        }
        return JSON;
    }
    static generateTimeFormat(type) {
        if(type == 12) {
            const date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            var ampm = "AM";

            if (hours > 12) {
            hours -= 12;
            ampm = "PM";
            }
            if(minutes < 10) {
                minutes = "0" + minutes;
            }
            if(seconds < 10) {
                seconds = "0" + seconds;
            }

            const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
            return formattedTime;
        }
        if(type == 24) {
            const date = new Date();
            const hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            if(minutes < 10) {
                minutes = "0" + minutes;
            }
            if(seconds < 10) {
                seconds = "0" + seconds;
            }
            const HString = "H";

            const formattedTime = `${hours}:${minutes}:${seconds} ${HString}`;
            return formattedTime;
        }
        if(type != 12 && type != 24) {
            throw new Error("TimeFormatBuilderERROR: En 'generateTimeFormat()':\nFormato de tiempo no válido.");
        }
    }
 }
export { TimeFormatBuilderUnResolved };