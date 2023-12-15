import cn from "@/utils/tailwind";
import SocialMedia from "@/components/SocialMedia";
import NavigationDots from "@/components/NavigationDots";



const AppWrap = (Component, idName, classNames) => function HOC() {

  return (
    <div id={idName} className={cn(" w-full min-h-screen flex  max-[450px]:min-h-fit", classNames)}>
      <SocialMedia />

      <div className="justify-center items-center flex flex-1 flex-col p-8 max-[450px]:px-0">
        <Component />

        <div className={cn(" w-full p-4 relative flex justify-end items-end pr-2 max-[400px]:p-0 max-[400px]:justify-center max-[400px]:items-center", idName === 'home' ? "opacity-0" : "")}>
          <p className='text-gray-900 dark:text-gray-300 text-sm sm:text-lg'>© {new Date().getFullYear()} VXRCEL All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap