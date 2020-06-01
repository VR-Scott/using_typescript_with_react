import { WrappedWeather, Weather, WithWeatherProps } from "../components/Weather";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../reducer";

const store = createStore(reducer);

export default () => (
    <Provider store={store}>
        <WithWeatherProps>
            {(props) => {
              return (
                <Weather
                // can also
                    {...props}
                    // temperature={props.temperature}
                    // scale={props.scale}
                    theme="pink"
                />
                );
            }}
        </WithWeatherProps>
    </Provider>
);