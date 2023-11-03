import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../styles/chatbot.css';
import { i18n } from '../translate/i18n'

function PageMaps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAWKCgD-mPxIdFj5PjSSkqgKuFE2eqTBlo"
    })

    const position = {
        lat: -22.752576366789267,
        lng: -47.34906918475344
    }

    return (

        <div class="container my-24 mx-auto md:px-6">
            <section class="mb-32">
                <div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="flex flex-wrap items-center">
                        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                            <div class="h-[500px] w-full">
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={{ width: '100%', height: '100%' }}
                                        center={position}
                                        zoom={15}
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
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                            <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-12 lg:pt-12">
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
                                            <p class="mb-2 font-bold">{(i18n.t('maps.text2'))}</p>
                                            <p class="text-neutral-500">
                                                {(i18n.t('maps.endereco'))}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="#58a4fc" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-6 grow">
                                            <p class="mb-2 font-bold">
                                                {(i18n.t('maps.title'))}
                                            </p>
                                            <p class="text-neutral-500">
                                                {(i18n.t('maps.email'))}
                                            </p>
                                            <p class="text-neutral-500">
                                                {(i18n.t('maps.suporte'))}
                                            </p>
                                        </div>
                                    </div>
                                </div>



                                <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                    <div class="align-start flex">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="#58a4fc" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="centeer ml-6 grow">
                                            <p class="mb-2 font-bold">{(i18n.t('maps.text1'))}</p>
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

export default PageMaps;
