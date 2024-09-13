"use client";

import {AnimatedBeamMultipleOutputDemo} from "@/components/demos/animated-beam-demo";
import {AnimatedShinyTextDemo} from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import {CoverDemo} from "@/components/demos/cover-demo";
import {ScrollBasedVelocityDemo} from "@/components/demos/scroll-based-velocity-demo";
import {WordPullUpDemo} from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import {InfiniteMovingLogos} from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import {PiCheckBold} from "react-icons/pi";
import {Link as ScrollLink, Element} from "react-scroll";
import {IconStarFilled} from "@tabler/icons-react";
import {ShootingStarsAndStarsBackgroundDemo} from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Veb Dizayn + Ishlab chiqish",
    description:
      "Bizning veb-dizayn va ishlab chiqish xizmatlarimiz bilan biznesingizni yangi bosqichga ko'taring",
  },
  {
    icon: "/images/s_1.png",
    title: "Qidiruv tizimlari optimallashtirish",
    description:
      "Bizning SEO xizmatlarimiz bilan veb-saytingizni qidiruv tizimi natijalarining eng yuqorisiga chiqaring",
  },
  {
    icon: "/images/s_5.png",
    title: "Kontent Yaratish",
    description:
      "Bizning ijtimoiy media marketing xizmatlarimiz bilan brendingizning onlayn mavjudligini oshiring",
  },
  {
    icon: "/images/s_3.png",
    title: "Ijtimoiy Media Marketing",
    description:
      "Bizning elektron marketing xizmatlarimiz bilan mijozlaringiz bilan aloqada bo'ling va savdoni oshiring",
  },
  {
    icon: "/images/s_4.png",
    title: "Elektron Marketing",
    description:
      "Bizning kontent yaratish xizmatlarimiz bilan biznesingiz natijalarga erishadi",
  },
  {
    icon: "/images/s_2.png",
    title: "Tovar uchun to'lov xizmati",
    description:
      "Samarasiz reklamaga pul sarflamang. Bizning PPC xizmatlarimiz sizga maqsadli auditoriyangizga etib borishga yordam beradi",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6">
        <Link href={"/"}>
          <Image
            src={"/logo/logo.webp"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-20"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link
              href={"/showcase"}
              className="hover:text-orange-600">
              Namoyish
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-orange-600">
              Xizmatlar
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-orange-600">
              Jarayon
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-orange-600">
              Kafolatlar
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a
            href="tel:519400200"
            className="hidden lg:flex"></a>

          <Link
            href={"/meeting"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            Muloqotga chaqirish
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Biz bilan muloqot qiling va loyihangiz haqida gaplashib, bir necha
            daqiqada taklif oling
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   ">
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              Muloqotga chaqirish
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
              Namoyish
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal
              boxColor={"#3b82f6"}
              duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-orange-600" />
                Dizayn
              </p>
            </BoxReveal>
            <BoxReveal
              boxColor={"#3b82f6"}
              duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-orange-600" />
                Ishlab chiqish
              </p>
            </BoxReveal>
            <BoxReveal
              boxColor={"#3b82f6"}
              duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-orange-600" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal
              boxColor={"#3b82f6"}
              duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-orange-600" />
                Strategiya
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Dunyo bo'ylab tezkor brendlar bizga ishonadi
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-orange-600 text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Baxtiyor Mijozlar
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-orange-600 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Yakunlangan Loyihalar
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/images/business.webp",
                    name: "business",
                  },
                  {
                    logo: "/images/business.webp",
                    name: "business",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Bizning xizmatlarimiz sizning biznesingiz ajralib turishiga
            mo'ljallangan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md">
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="rasm"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Bizning{" "}
            <span className="text-orange-600 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="rasm"
              />
              Ijodiy
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="rasm"
              />
            </span>{" "}
            Jarayonimiz
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            Bizning xizmatlarimiz sizning biznesingiz e'tiborga tushishiga
            yordam beradi.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/dilshodjonh.jpg"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="rasm"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Naqsh bilan 2 yildan beri ishlayapmiz va ular bilan ishlash
              ajoyib. Ular bizga biznesimizni rivojlantirishda yordam berishdi
              va natijalardan juda mamnunmiz. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Dilshodbek, Hikmatov <br />
              CEO, Hanyuban
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-20"
              alt="rasm"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">91-166-04-44</p>
          <p className="text-left  text-xl  text-gray-500">
            naqsh.designuz@gmail.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Naqsh. Barcha huquqlar himoyalangan.
          <Link
            href="/"
            className="text-orange-600">
            Maxfiylik siyosati
          </Link>
        </div>
      </footer>
    </div>
  );
}
