import React from 'react';

interface Props extends WeatherProps{
    theme: 'yellow' | 'pink'
}

export const Weather: React.FunctionComponent<
    Props
> = ({temperature, scale }) => {
    return (
        <div className="">
            The temperature is {temperature} *{scale}
        </div>
    );
};

interface WeatherProps {
    temperature: number;
    scale: 'C' | 'F';
}

type Omit<T, K extends keyof T> = Pick<
    T,
    Exclude<keyof T, K>
>;

function withWeatherProps<P extends WeatherProps>(
    Component: React.ComponentType<P>
) {
    return (props: Omit<P, keyof WeatherProps>) => {
        return (
            <Component {...props as P} temperature={25} scale="C"/>
        );
    };
}

export const WrappedWeather = withWeatherProps(Weather)