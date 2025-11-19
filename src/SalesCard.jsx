import React from "react";

const SalesCard = ({
  Discount,
  img,
  h2,
  price,
  DiscountPrice,
  rating,
  total,
}) => {
  return (
    <div className="w-[260px] bg-white rounded-2xl shadow-md hover:shadow-xl 
      transition-all duration-300 p-4 cursor-pointer group border border-gray-100">


      <div className="relative bg-gray-100 rounded-xl h-56 flex items-center justify-center overflow-hidden">
        

        {Discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
            {Discount}
          </span>
        )}


        <div className="absolute top-3 right-3 flex flex-col gap-2">

          <button className=" ">
            <svg className="w-8 h-8 text-gray-700" viewBox="0 0 640 512" fill="currentColor">
              <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"/>
            </svg>
          </button>

          <button className=" ">
            <svg className="w-7 h-8 text-gray-700" viewBox="0 0 576 512" fill="currentColor">
              <path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z"/>
            </svg>
          </button>
        </div>

        <img
          src={img}
          alt={h2}
          className="h-40 transition-transform duration-300 group-hover:scale-110"
        />


        <div className="absolute bottom-0 w-full text-center bg-black text-white py-2
          rounded-b-xl opacity-0 group-hover:opacity-100 translate-y-3 
          group-hover:translate-y-0 transition-all duration-300">
          Add To Cart
        </div>
      </div>

      <h2 className="mt-4 font-semibold text-lg text-gray-800">{h2}</h2>


      <div className="mt-2 flex items-center gap-2">
        <span className="text-xl font-bold text-red-600">{price}</span>
        <span className="text-gray-400 line-through">{DiscountPrice}</span>
      </div>


      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-yellow-500" : "fill-gray-300"
            }`}
            viewBox="0 0 576 512"
          >
            <path d="M287.9 17.8L354 150.2 499.2 171.5 382 279.1 410.6 424.6 287.9 354.6 165.3 424.6 193.9 279.1 76.8 171.5 222 150.2 287.9 17.8z" />
          </svg>
        ))}
        <span className="text-gray-600 text-sm ml-2">({total})</span>
      </div>
    </div>
  );
};

export default SalesCard;
