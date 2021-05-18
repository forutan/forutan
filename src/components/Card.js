import React from 'react'

export default function Card(props) {
    console.log(props);
    var {title, description ,stack} = props.cardData;
    return (
        <div className="flex flex-row rounded-xl bg-gray-100 cursor-pointer overflow-hidden h-24 sm:h-28 md:h-48 lg:h-52 min-w-full" >
            <img alt="profile" src="https://picsum.photos/seed/picsum/150/150" className="h-full"></img>
            <div className="pl-2  py-6 pt-1 pr-2">
                <h2 className="text-md sm:text-lg md:text-xl p-0 hover:text-purple-600">
                    {title}
                </h2>
                <p className="text-gray-400 text-xs">
                    {stack}
                </p>
                <p className=" hidden sm:block text-xs md:text-sm">
                    {description}
                </p>
                {/* <Link className="text-xs md:text-sm text-purple-600 hover:underline cursor-pointer block mt-1 sm:mt-2">
                    learn more
                </Link> */}
            </div>

        </div>
    )
}
