import { Link } from 'gatsby'
import React from 'react'

export default function Card() {
    return (
        <div className="flex flex-row rounded-xl bg-gray-100 cursor-pointer overflow-hidden h-24 sm:h-28 md:h-48 lg:h-52 max-w-lg" >
            <img alt="profile" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" className="h-full"></img>
            <div className="pl-2  py-6 pt-1 pr-2">
                <h2 className="text-md sm:text-lg md:text-xl p-0 hover:text-purple-600 text-strong">how to create a new website  with HTML & CSS #1</h2>
                <p className="text-gray-400 hidden sm:block text-xs">stack</p>
                <p className=" hidden sm:block text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <Link className="text-xs md:text-sm text-purple-600 hover:underline cursor-pointer block mt-1 sm:mt-2">learn more</Link>
            </div>

        </div>
    )
}
