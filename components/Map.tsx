"use client"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"


export default function Map() {

    const {isLoaded, loadError} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_FREE as string
    })

    const center = {
        lat: -15.790919,
        lng: 35.011443
    }

  return (
    <section className="h-screen w-full">
        <div className="h-[90%] container mx-auto flex flex-row items-center justify-center">
            <div className="h-full w-full flex flex-col justify-start items-start">
                <h1 className="text-6xl font-extrabold text-primary font-mont">Contact Us</h1>
                <p className="mt-5 font-semibold text-lg font-mont text-[#CCCCCC] w-2/3">Have questions or want to get involved? Reach out to us! We're here to listen, assist, and collaborate.</p>

                <div className="flex flex-row justify-center items-center gap-2 mt-10">
                       <svg className="h-6 w-6 text-red-500"
                            data-slot="icon"
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                        </svg>
                        <p className="text-white font-mont font-bold text-lg">Plot No 228, Jacaranda Avenue, Mandala, Blantyre, Malawi.</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 mt-5">
                        <svg
                            className="h-6 w-6 text-primary"
                            data-slot="icon"
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                        </svg>
                    <p className="text-white font-mont font-bold text-lg">P.O Box 333, Blantyre, Malawi.</p>
                </div>
            </div>

            {isLoaded && (
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerClassName="h-full w-full rounded-3xl border-2 border-primary"
                >
                    <Marker position={center} title="We are here" label={"WE ARE HERE"}></Marker>
                </GoogleMap>
            )}

            {loadError && (
                <p className="text-red-500 text-lg font-mont font-bold">Error loading map</p>
            )}
        </div>
    </section>
  )
}
