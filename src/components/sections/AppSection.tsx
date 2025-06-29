import Image from "next/image";
import Link from "next/link";

const AppDownloadSection = () => {
  return (
    <section className="mb-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 pb-8 md:pb-0">
            <Link
              href="#"
              className="font-inter text-lg font-semibold text-brand-secondary transition-colors hover:text-brand-primary"
            >
              Lorem Ipsum
            </Link>

            <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
              Lorem Ipsum Dolor
              <br />
              Sit Amet
            </h2>

            <p className="font-inter text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
              morbi suspendisse convallis. Urna a urna lectus donec felis risus
              duis pellentesque. Pellentesque ultricies ipsum.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store/google-play.svg"
                  alt="Get it on Google Play Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
              <Link href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store/app-store.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-end justify-center">
            <Image
              src="/app-store/phone-mockup.svg"
              alt="App Mockup"
              width={500}
              height={500}
              className="scale-140 lg:scale-140 h-auto w-auto translate-y-6 object-contain md:translate-y-12 md:scale-110 lg:translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
