import clsx from "clsx";

function TrelloBrandIcon({
  className,
  onClick,
}: {
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      className="w-24 h-7 rounded-md  py-4 px-0 hover:bg-[#333C43] flex justify-center items-center "
      onClick={onClick}
    >
      <svg
        version="1.1"
        id="Calque_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 389 228"
        className={clsx("w-24 h-14  ", className)}
        // style="enable-background:new 0 0 389 228;"
        xmlSpace="preserve"
      >
        <g>
          <linearGradient
            id="SVGID_1_"
            className="fill-red-300"
            gradientUnits="userSpaceOnUse"
            x1="-100.1014"
            y1="528.1622"
            x2="-100.1014"
            y2="529.1622"
            gradientTransform="matrix(62.4202 0 0 -62.38 6318.5024 33091.4258)"
          >
            {/* <stop offset="0" style="stop-color:#FFFFFF" /> */}
            {/* <stop offset="1" style="stop-color:#FFFFFF" />/ */}
          </linearGradient>
          <path
            className="fill-secondary-500 "
            d="M94,82.3H46.4c-4.1,0-7.4,3.3-7.4,7.4v47.5c0,2,0.8,3.9,2.2,5.3c1.4,1.4,3.3,2.2,5.3,2.2H94
		c2,0,3.9-0.8,5.3-2.2c1.4-1.4,2.2-3.3,2.2-5.3V89.7C101.4,85.6,98,82.3,94,82.3z M65.9,127.2c0,0.7-0.3,1.3-0.7,1.8
		c-0.5,0.5-1.1,0.7-1.8,0.7H53c-1.4,0-2.5-1.1-2.5-2.5V96.3c0-1.4,1.1-2.5,2.5-2.5h10.4c1.4,0,2.5,1.1,2.5,2.5L65.9,127.2z
		 M89.9,113c0,0.7-0.3,1.3-0.7,1.8c-0.5,0.5-1.1,0.7-1.8,0.7H77c-1.4,0-2.5-1.1-2.5-2.5V96.3c0-1.4,1.1-2.5,2.5-2.5h10.4
		c1.4,0,2.5,1.1,2.5,2.5L89.9,113z"
          />

          <g transform="translate(87)">
            <path
              className="fill-secondary-500"
              d="M81.3,86.9v12.1H67v45.8H53.2V98.9H38.9V86.9H81.3z"
            />
            <path
              className="fill-secondary-500"
              d="M98.8,144.7H86.1v-45h12.7v8.6c2.4-6.1,6.3-9.7,13.2-9.2v13.3c-9-0.7-13.2,1.5-13.2,8.7V144.7z"
            />
            <path
              className="fill-secondary-500"
              d="M181.6,145c-8.4,0-13.6-4-13.6-13.5V82.3h12.8v47.5c0,2.7,1.8,3.7,4,3.7c0.6,0,1.3,0,1.9-0.1v11.1
			C185.1,144.9,183.3,145.1,181.6,145L181.6,145z"
            />
            <path
              className="fill-secondary-500"
              d="M208.4,145c-8.4,0-13.6-4-13.6-13.5V82.3h12.8v47.5c0,2.7,1.8,3.7,4.1,3.7c0.6,0,1.3,0,1.9-0.1v11.1
			C211.8,144.9,210.1,145.1,208.4,145z"
            />
            <path
              className="fill-secondary-500"
              d="M219.7,122.1c0-13.9,8-23.4,21.8-23.4s21.6,9.5,21.6,23.4c0,13.9-7.9,23.6-21.6,23.6S219.7,136,219.7,122.1z
			 M232.2,122.1c0,6.8,2.8,12.1,9.3,12.1s9.1-5.4,9.1-12.1s-2.8-12-9.1-12S232.2,115.4,232.2,122.1z"
            />
            <path
              className="fill-secondary-500"
              d="M129.2,126.2c3.6,0.4,7.2,0.6,10.7,0.6c9.8,0,18-2.6,18-12.1c0-9.2-8.5-16.1-18.7-16.1
			c-13.7,0-22.5,9.9-22.5,23.8c0,14.4,7.6,23,24.7,23c5.1,0,10.1-0.9,14.9-2.7v-10.8c-4.4,1.4-9.4,2.8-14.4,2.8
			C135.1,134.9,130.4,132.7,129.2,126.2z M139,108.5c3.6,0,6.5,2.4,6.5,5.8c0,4.3-4.6,5.7-9.8,5.7c-2.2,0-4.5-0.2-6.7-0.5
			c0.2-2.1,0.8-4.1,1.8-6C132.5,110.5,135.6,108.6,139,108.5L139,108.5z"
            />
          </g>
        </g>
      </svg>
    </button>
  );
}

export default TrelloBrandIcon;
