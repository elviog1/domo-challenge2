import React from 'react'
import Html5 from '../assets/html.svg'
import Css from '../assets/css.svg'
import Sass from '../assets/sass.svg'
import Js from '../assets/js.svg'
import Angular from '../assets/angular.svg'
import Python from '../assets/python.svg'
export default function Technology() {
  return (
    <div className='bg-technology d-flex align-items-center'>
        <div className='container d-flex justify-content-around flex-wrap'>
            <div className='technology-description'>
                <p className='fs-2 text-white'>We use cutting edge technology</p>
                <p className='text-technology fs-5'>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </div>
            <div className='div-technology d-flex flex-wrap justify-content-between'>
                <img className='icon-technology' src={Html5} />
                <img className='icon-technology' src={Css} />
                <img className='icon-technology' src={Sass} />
                <img className='icon-technology' src={Js} />
                <img className='icon-technology' src={Angular} />
                <img className='icon-technology' src={Python} />
            </div>
        </div>
    </div>
  )
}
