import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../styles/chatbot.css';
import { i18n } from '../translate/i18n'

function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAWKCgD-mPxIdFj5PjSSkqgKuFE2eqTBlo"
    })

    const position = {
        lat: -22.752576366789267,
        lng: -47.34906918475344
    }

    return (

        <div class="container mx-auto w-72">
            <section class="">
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class=" items-center">
                        <div class="">
                            <div class="h-[300px] w-full">
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={{ width: '100%', height: '100%' }}
                                        center={position}
                                        zoom={18}
                                    >
                                        <Marker position={position} options={{
                                            label: {
                                                text: 'Aqcion Digital',
                                                className: 'map-marker',
                                            }
                                        }} />
                                    </GoogleMap>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 mt-12">
                            <div class="flex flex-wrap">
                                <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                                    <div class="align-start flex">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="#58a4fc" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-6 grow">
                                            <p class="mb-2 font-bold text-black">{(i18n.t('maps.text2'))}</p>
                                            <p class="text-neutral-500">
                                                {(i18n.t('maps.endereco'))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Maps;
