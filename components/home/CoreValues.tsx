"use client"

import Image from "next/image";

import { integrity, logo, professionalism, quality, transparency } from "@/assets";
import { BackgroundRainbow } from "..";

export default function CoreValues() {
  return (
    <section className="h-screen w-full mt-56 relative">
        <BackgroundRainbow />
        <div className="h-full container mx-auto flex flex-col justify-center items-center">
            <div className="relative h-48 w-48">
                <Image
                    src={logo}
                    fill
                    alt="logo"
                    className="object-cover"
                />
            </div>

            <div className="mt-5">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-mont">Our Core Values.</p>
            </div>

            <div className="w-full flex flex-row flex-wrap gap-y-10 justify-around items-center mt-20">
                <div className="h-44 w-44 flex flex-col justify-center items-center backdrop-blur-sm bg-primary/60 rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={quality}
                            fill
                            alt="quality"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="text-xl text-center font-medium font-mont">Quality</p>
                </div>
                <div className="h-44 w-44 flex flex-col justify-center items-center backdrop-blur-sm bg-primary/60 rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={integrity}
                            fill
                            alt="integrity"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="text-xl text-center font-medium font-mont">Integrity</p>
                </div>
                <div className="h-44 w-44 flex flex-col justify-center items-center backdrop-blur-sm bg-primary/60 rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={transparency}
                            fill
                            alt="transparency"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="text-xl text-center font-medium font-mont">Transparency</p>
                </div>
                <div className="h-44 w-44 flex flex-col justify-center items-center backdrop-blur-sm bg-primary/60 rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={professionalism}
                            fill
                            alt="professionalism"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="text-xl text-center font-medium font-mont">Professionalism</p>
                </div>
            </div>
        </div>
    </section>

  )
}
