import '../styles/animate.css';
import '../styles/tailwind.css';
import '../styles/style.css';
import '../styles/chatbot.css';

// import '../assets/js/main';
// import '../assets/js/menuscroll';
// import '../assets/js/wowmin';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Chatbot from './ChatBot';
import emailjs from '@emailjs/browser';

import {
  ChatIcon
} from '@heroicons/react/outline';

import logo1 from '../assets/logo/logo1.png';
import logo2 from '../assets/logo/logo2.png';
import logo02 from '../assets/logo/logo02.png';

import react from '../assets/tecnologias/react.png';
import tailwindwhite from '../assets/tecnologias/tailwindwhite.png';
import firebasewhite from '../assets/tecnologias/firebasewhite.png';
import js from '../assets/tecnologias/js.png';
import djangowhite from '../assets/tecnologias/djangowhite.png';
import mysql from '../assets/tecnologias/mysql.png';
import flutterflow from '../assets/tecnologias/flutter.svg';
import stripe from '../assets/tecnologias/stripe.png';
import angular from '../assets/tecnologias/angular.png'

import menezes from '../assets/time/menezes2.png';
import favarelli from '../assets/time/thaiza.png';
import nonato from '../assets/time/nonato3.png';

import pessoa1 from '../assets/feedbacks/1.jpg';
import pessoa2 from '../assets/feedbacks/2.jpg';
import pessoa3 from '../assets/feedbacks/3.jpg';

import graphic from '../assets/principalAqcion/graphic1.jpg'
import gif from '../assets/principalAqcion/wallpaper.jpg'
import chatbotgif from '../assets/principalAqcion/chatbot1.gif'
import footershape3 from '../assets/footer/shape-3.png';

import { i18n } from '../translate/i18n'
import PageMaps from './Page-Maps';
import Maps from './Maps';

export const AqcionD = () => {
  // logica: FAZER MUDAR O STYLE DA CLASSE PARA A DIV DO CHATBOT FECHAR E ABRIR
  const [visible, setVisible] = useState("button-box-fechar")
  const [pressed, setPressed] = useState(false)

  const setMenuVisible = () => {
    pressed ? setVisible("button-box-fechar") : setVisible("button-box")
    setPressed(!pressed)
  }

   // btn idiomas
  const I18N_STORAGE_KEY = 'i18nextLng'

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  const handleSelectChange = event => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location
  }

  // caixa de mensagem 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    // nao enviar se estiver campos em vazio
    if (name === '' || email === '' || celular === '' || message === ''){
      alert('Preencha todos os campos.')
      return;
    }

    // definindo {{ email template }} lá em emailJS
    const templateParams = {
      from_name: name,
      message: message,
      celular: celular,
      email: email,
    }

    // resetar as caixas de contato após enviar mensagem 
    emailjs.send('service_tbu6r2n', 'template_gy48xc3', templateParams, 'Pfa5Z04oVD9DUWtEQ')
    .then((response) => {
      console.log('email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setCelular('')
      setMessage('')
    }, (err) => {
      console.log('ERRO: ', err)
    })
  }

  return (
    <>
      {/* NAVBAR  */}
      <div
        className='ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent'
      >
        <div className='container pt-2 pb-2'>
          <div className='relative -mx-4 flex items-center justify-end'>
            <div className='px-4 w-96'>
              <Link to='/' className='navbar-logo block'> <img src={logo02} alt='' className='h-7 cursor-default header-logo hover:scale-110 duration-200 ease-in-out' /> </Link>
            </div>
            <div className='flex w-full items-center justify-end px-4'>
              <div>
                <ul className=''>
                  <li id='navbarToggler' className='group absolute right-2 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-blue-400 focus:ring-2 lg:hidden' >
                    <select className='rounded-2xl text-center text-blue-400 bg-black' onChange={handleSelectChange} value={language}>
                      <option> {(i18n.t('idioma.text'))} </option>
                      <option value='pt-BR'> PT </option>
                      <option value='en-US'> EN </option>
                      <option value='es-ES'> ES </option>
                    </select>
                  </li>
                </ul>

                
                
                {/* <button
                  id='navbarToggler'
                  className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-blue-400 focus:ring-2 lg:hidden'
                >
                  <span
                    className='relative my-[6px] block h-[2px] w-[30px] bg-white'
                  ></span>
                  <span
                    className='relative my-[6px] block h-[2px] w-[30px] bg-white'
                  ></span>
                  <span
                    className='relative my-[6px] block h-[2px] w-[30px] bg-white'
                  ></span>
                </button> */}
                <nav
                  id='navbarCollapse'
                  className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6'
                >
                  <ul className='block lg:flex'>
                  <li className='group relative'>
                      <select className='mt-6 rounded-2xl text-center text-blue-400 bg-black' onChange={handleSelectChange} value={language}>
                        <option> {(i18n.t('idioma.text'))} </option>
                        <option value='pt-BR'> PT </option>
                        <option value='en-US'> EN </option>
                        <option value='es-ES'> ES </option>
                      </select>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#home'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-blue-400 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70'
                      >
                        {(i18n.t('navbar.op1'))}
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#about'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-blue-400 lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        {(i18n.t('navbar.op2'))}
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#team'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-blue-400 lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        {(i18n.t('navbar.op3'))}
                      </a>
                    </li>
                    <li className='group relative'>
                      <a
                        href='#contact'
                        className='ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-blue-400 lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                      >
                        {(i18n.t('navbar.op4'))}
                      </a>
                    </li>
                   
                  </ul>
                </nav>
              </div>
              {/* <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
                <Link to='/SignIn' className='loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70'> Sign In</Link>
                <Link to='/SignUp' className='signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark'> Sign Up </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* HOME  */}
      <div id='home' className='relative overflow-hidden bg-black pt-[120px] md:pt-[130px] lg:pt-[160px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
                data-wow-delay='.2s'
              >
                <h1
                  className='light text-white mb-8 text-3xl font-bold sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug' data-text="Aqcion"
                >
                  {(i18n.t('titles.homeTitle'))}
                </h1>
                <p className=' mx-auto mb-10 max-w-[600px] text-base text-white sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed'>
                  {(i18n.t('homeMessages.homeText'))}
                  <br />
                  {(i18n.t('homeMessages.homeText2'))}
                </p>
                <div className='wow fadeInUp text-center' data-wow-delay='.3s'>
                </div>
              </div>
            </div>
            <div className='w-full px-4'>
              <div
                className='wow fadeInUp relative z-10 mx-auto max-w-[845px]'
                data-wow-delay='.25s'
              >
                <div className='mt-16'>
                  <img
                    src={gif}
                    alt='hero'
                    className='floating mx-auto max-w-full rounded-t-xl rounded-tr-xl hover:scale-110 duration-200 ease-in-out'
                  />
                </div>
                <div className='absolute bottom-0 -left-9 z-[-1]'>
                  <svg
                    width='134'
                    height='106'
                    viewBox='0 0 134 106'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='1.66667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 1.66667 104)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 16.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 31 104)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 45.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 60.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 88.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 117.667 104)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 74.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 103 104)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 132 104)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 1.66667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 16.3333 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 31 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 45.6667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 103 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 132 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='74.6673'
                      r='1.66667'
                      transform='rotate(-90 1.66667 74.6673)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 16.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 31 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 31 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 45.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 60.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 60.3333 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 88.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 88.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 117.667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 117.667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 74.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 74.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 103 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 103 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 132 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 132 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 31 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 31 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 60.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 60.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 88.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 88.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 117.667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 117.667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 74.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 74.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 103 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 103 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 132 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 132 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 1.66667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 16.3333 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 31 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 31 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 45.6667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 60.3333 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 88.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 117.667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 74.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 103 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 103 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 132 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 132 1.66707)'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='absolute -top-6 -right-6 z-[-1]'>
                  <svg
                    width='134'
                    height='106'
                    viewBox='0 0 134 106'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='1.66667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 1.66667 104)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 16.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 31 104)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 45.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 60.3333 104)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 88.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 117.667 104)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 74.6667 104)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 103 104)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='104'
                      r='1.66667'
                      transform='rotate(-90 132 104)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 1.66667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 16.3333 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 31 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='89.3333'
                      r='1.66667'
                      transform='rotate(-90 45.6667 89.3333)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 103 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='89.3338'
                      r='1.66667'
                      transform='rotate(-90 132 89.3338)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='74.6673'
                      r='1.66667'
                      transform='rotate(-90 1.66667 74.6673)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 16.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 31 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 31 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 45.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='31.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 31.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 60.3333 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 60.3333 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 88.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 88.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 117.667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 117.667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 74.6667 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 74.6667 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 103 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 103 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='74.6668'
                      r='1.66667'
                      transform='rotate(-90 132 74.6668)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='31.0001'
                      r='1.66667'
                      transform='rotate(-90 132 31.0001)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 1.66667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 16.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 31 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 31 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 45.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 60.3333 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 60.3333 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 88.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 88.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 117.667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 117.667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 74.6667 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 74.6667 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 103 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 103 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='60.0003'
                      r='1.66667'
                      transform='rotate(-90 132 60.0003)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='16.3336'
                      r='1.66667'
                      transform='rotate(-90 132 16.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 1.66667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='1.66667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 1.66667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 16.3333 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='16.3333'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 16.3333 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 31 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='31'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 31 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='45.3336'
                      r='1.66667'
                      transform='rotate(-90 45.6667 45.3336)'
                      fill='white'
                    />
                    <circle
                      cx='45.6667'
                      cy='1.66683'
                      r='1.66667'
                      transform='rotate(-90 45.6667 1.66683)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 60.3333 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='60.3333'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 60.3333 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 88.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='88.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 88.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 117.667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='117.667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 117.667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 74.6667 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='74.6667'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 74.6667 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 103 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='103'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 103 1.66707)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='45.3338'
                      r='1.66667'
                      transform='rotate(-90 132 45.3338)'
                      fill='white'
                    />
                    <circle
                      cx='132'
                      cy='1.66707'
                      r='1.66667'
                      transform='rotate(-90 132 1.66707)'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES  */}
      <section className='section bg2 pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] bg-white'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mb-12 max-w-[620px] lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-blue-400'>
                {(i18n.t('servicosMessages.text1'))}
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-dark sm:text-4xl md:text-[42px]'
                >
                  {(i18n.t('servicosMessages.text2'))}
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  {(i18n.t('servicosMessages.text3'))}
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12 bg-white' data-wow-delay='.1s'>
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-500'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-blue-500 bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 52 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-blue-400'>
                {(i18n.t('servicosMessages.titleservicos1'))}
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                {(i18n.t('servicosMessages.textservicos1'))}
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div
                className='wow fadeInUp group mb-12 bg-white'
                data-wow-delay='.15s'
              >
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-500'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-blue-500 bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 52 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M49.8062 23.3187L43.875 17.3875C43.3063 16.8187 42.4125 16.8187 41.8438 17.3875C41.275 17.9562 41.275 18.85 41.8438 19.4187L46.9625 24.6187H27.4625V4.87498L32.5812 10.075C33.15 10.6437 34.0437 10.6437 34.6125 10.075C35.1812 9.50623 35.1812 8.61248 34.6125 8.04373L28.6812 2.11248C27.95 1.38123 26.975 0.974976 26 0.974976C24.9438 0.974976 24.05 1.38123 23.3188 2.11248L17.3875 8.04373C16.8187 8.61248 16.8187 9.50623 17.3875 10.075C17.6312 10.3187 18.0375 10.4812 18.3625 10.4812C18.6875 10.4812 19.0937 10.3187 19.3375 10.075L24.6187 4.87498V24.5375H4.95625L10.075 19.3375C10.6437 18.7687 10.6437 17.875 10.075 17.3062C9.50625 16.7375 8.6125 16.7375 8.04375 17.3062L2.1125 23.2375C0.65 24.7 0.65 27.1375 2.1125 28.6L8.04375 34.5312C8.2875 34.775 8.69375 34.9375 9.01875 34.9375C9.34375 34.9375 9.75 34.775 9.99375 34.5312C10.5625 33.9625 10.5625 33.0687 9.99375 32.5L4.79375 27.3H24.4563V47.125L19.2563 41.925C18.6875 41.3562 17.7938 41.3562 17.225 41.925C16.6563 42.4937 16.6563 43.3875 17.225 43.9562L23.1562 49.8875C23.8875 50.6187 24.8625 51.025 25.8375 51.025C26.8937 51.025 27.7875 50.6187 28.5187 49.8875L34.45 43.9562C35.0188 43.3875 35.0188 42.4937 34.45 41.925C33.8813 41.3562 32.9875 41.3562 32.4188 41.925L27.4625 47.125V27.3812H47.0438L41.8438 32.5812C41.275 33.15 41.275 34.0437 41.8438 34.6125C42.0875 34.8562 42.4938 35.0187 42.8188 35.0187C43.1438 35.0187 43.55 34.8562 43.7938 34.6125L49.725 28.6812C51.2688 27.2187 51.2687 24.7812 49.8062 23.3187Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-blue-400'>
                {(i18n.t('servicosMessages.titleservicos2'))}
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                {(i18n.t('servicosMessages.textservicos2'))}
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12 bg-white' data-wow-delay='.2s'>
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-500'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-blue-500 bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z'
                      fill='white'
                    />
                    <path
                      d='M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z'
                      fill='white'
                    />
                    <path
                      d='M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z'
                      fill='white'
                    />
                    <path
                      d='M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-blue-400'>
                {(i18n.t('servicosMessages.titleservicos3'))}
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                {(i18n.t('servicosMessages.textservicos3'))}
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
              <div
                className='wow fadeInUp group mb-12 bg-white'
                data-wow-delay='.25s'
              >
                <div
                  className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-500'
                >
                  <span
                    className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-blue-500 bg-opacity-20 duration-300 group-hover:rotate-45'
                  ></span>
                  <svg
                    width='35'
                    height='35'
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-blue-400'>
                {(i18n.t('servicosMessages.titleservicos4'))}
                </h4>
                <p className='mb-8 text-body-color lg:mb-11'>
                {(i18n.t('servicosMessages.textservicos4'))}
                </p>
              </div>
            </div>
          </div>
          <div className={visible}>
            <Chatbot />
            <div className='flex items-center content-center justify-center sm:flex-col'>
              <img src={chatbotgif} alt="" className='h-96 rounded-3xl' />
            </div>
          </div>
          <button class='button-chat-button duration-200 ease-in-out' onClick={() => setMenuVisible()}>
            <ChatIcon className='w-11 text-blue-600 hover:scale-110 duration-200 ease-in-out hover:text-blue-500' />
          </button>
        </div>
      </section>

      <div className='flex flex-wrap bg-black rounded-lg'>
            <div className='wow fadeInUp mt-14 w-full px-4' data-wow-delay='.2s'>
              <h2 className='relative pb-5 text-2xl font-semibold text-blue-500 sm:text-[28px]'>
              </h2>
              <span className='mb-10 inline-block h-[2px] w-20 bg-blue-500'></span>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className='wow fadeInUp group mb-10' data-wow-delay='.1s'>
                {/* <div className='mb-8 overflow-hidden rounded'>
                  <img src={qrcode} alt='image'
                    className='w-full transition group-hover:rotate-6 group-hover:scale-125 blur-sm hover:blur-none' />
                </div> */}
                <div>
                  <span
                    className='mb-5 inline-block rounded bg-blue-500 py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                    {(i18n.t('pageblog.topictitle1'))}
                  </span>
                  <h3>
                    <a href='javascript:void(0)'
                      className='cursor-default mb-4 inline-block text-xl font-semibold text-blue-500 hover:text-blue-400 sm:text-2xl lg:text-xl xl:text-2xl'>
                      {(i18n.t('pageblog.topicname1'))}
                    </a>
                  </h3>
                  <p className='text-white text-body-color'>
                  {(i18n.t('pageblog.topictext1'))}
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className='wow fadeInUp group mb-10' data-wow-delay='.15s'>
                {/* <div className='mb-8 overflow-hidden rounded'>
                  <img src={github} alt='image'
                    className='w-full transition group-hover:rotate-6 group-hover:scale-125 blur-sm hover:blur-none' />
                </div> */}
                <div>
                  <span
                    className='mb-5 inline-block rounded bg-blue-500 py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                    {(i18n.t('pageblog.topictitle2'))}
                  </span>
                  <h3>
                    <a href='javascript:void(0)'
                      className='cursor-default mb-4 inline-block text-xl font-semibold text-blue-500 hover:text-blue-400 sm:text-2xl lg:text-xl xl:text-2xl'>
                      {(i18n.t('pageblog.topicname2'))}
                    </a>
                  </h3>
                  <p className='text-white text-body-color'>
                  {(i18n.t('pageblog.topictext2'))}
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className='wow fadeInUp group mb-10' data-wow-delay='.2s'>
                {/* <div className='mb-8 overflow-hidden rounded'>
                  <img src={libra} alt='image'
                    className='w-full transition group-hover:rotate-6 group-hover:scale-125 blur-sm hover:blur-none' />
                </div> */}
                <div>
                  <span
                    className='mb-5 inline-block rounded bg-blue-500 py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                    {(i18n.t('pageblog.topictitle3'))}
                  </span>
                  <h3>
                    <a href='javascript:void(0)'
                      className='cursor-default mb-4 inline-block text-xl font-semibold text-blue-500 hover:text-blue-400 sm:text-2xl lg:text-xl xl:text-2xl'>
                      {(i18n.t('pageblog.topicname3'))}
                    </a>
                  </h3>
                  <p className='text-white text-body-color'>
                  {(i18n.t('pageblog.topictext3'))}
                  </p>
                </div>
              </div>
            </div>
          </div>

      {/* NOTA  */}
      <section
        id='about'
        className='bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]'
      >
        <div className='container'>
          <div className='wow fadeInUp bg-white rounded-xl ' data-wow-delay='.2s'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4'>
                <div
                  className='items-center justify-between overflow-hidden lg:flex'
                >
                  <div
                    className='w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]'
                  >
                    <span
                      className=' inline-block bg-blue-600 py-2 px-5 text-sm font-medium text-white'
                    >
                      {(i18n.t('notaMessages.text1'))}
                    </span>
                    {/* <h2
                      className='mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 sm:text-4xl sm:leading-snug 2xl:text-[40px]'
                    >
                      {(i18n.t('notaMessages.text2'))}
                    </h2> */}
                    <h3 className='wow fadeInUp mb-4 mt-8 text-2xl font-bold text-blue-400 sm:text-[26px]' data-wow-delay='.1s'>
                    {(i18n.t('pageblog.text7'))}
                    </h3>
                    <p className='wow fadeInUp mb-4 text-base leading-relaxed text-body-color' data-wow-delay='.1s'>
                    {(i18n.t('pageblog.text8'))}
                    </p>
                    <div
                      className='wow fadeInUp relative z-10 mb-10 overflow-hidden rounded bg-blue-500 bg-opacity-5 py-8 px-6 text-center sm:p-10 md:px-[60px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'
                      data-wow-delay='.1s
                      '>
                      <div className='mx-auto max-w-[530px] '>
                        <span className='mb-6 flex justify-center text-blue-400'>
                          <svg width='44' height='26' viewBox='0 0 44 26' className='fill-current'>
                            <path
                              d='M10.1101 0.00124908C5.46698 -0.0701833 1.25247 2.92998 0.252417 7.00162C-0.319041 9.50175 0.180985 12.0019 1.68106 14.002C3.25258 16.145 5.68128 17.5022 8.39571 17.8593L10.8958 24.0025C11.1816 24.6454 11.8245 25.074 12.5388 25.074C13.2531 25.074 13.896 24.6454 14.1817 24.0025C14.6103 22.931 15.1103 21.7881 15.6104 20.7166C16.8247 18.0022 18.0391 15.2163 18.9677 12.359C19.9677 9.35889 19.5392 6.14443 17.8248 3.71573C16.1104 1.35846 13.396 0.0726814 10.1101 0.00124908ZM16.6104 11.6447C15.6818 14.3592 14.4675 17.145 13.3245 19.788C13.1102 20.3595 12.8245 20.8595 12.6102 21.431L10.1815 15.5735L9.39576 15.5021C7.10992 15.3592 4.96695 14.2163 3.7526 12.5733C2.68112 11.1447 2.32396 9.35889 2.75255 7.64451C3.46687 4.71579 6.53846 2.57281 10.0386 2.57281H10.1101C12.5388 2.57281 14.5389 3.57287 15.8247 5.28724C17.039 7.00162 17.3247 9.43032 16.6104 11.6447Z' />
                            <path
                              d='M42.3267 3.78726C40.6124 1.35856 37.8979 0.00134277 34.612 0.00134277C34.5406 0.00134277 34.5406 0.00134277 34.4692 0.00134277C29.8975 0.00134277 25.7544 3.0015 24.7544 7.00171C24.1829 9.50185 24.6829 12.002 26.183 14.0735C27.7545 16.2165 30.1832 17.5737 32.8977 17.9309L35.3978 24.074C35.6835 24.7169 36.3264 25.1455 37.0407 25.1455C37.7551 25.1455 38.398 24.7169 38.6837 24.074C39.1123 23.0026 39.6123 21.8596 40.1123 20.7882C41.3267 18.0737 42.541 15.2879 43.4696 12.4306C44.4697 9.50184 44.0411 6.21596 42.3267 3.78726ZM41.1124 11.6448C40.1838 14.3592 38.9694 17.1451 37.8265 19.7881C37.6122 20.3596 37.3265 20.8596 37.1122 21.431L34.6835 15.5736L33.8977 15.5022C31.6119 15.3593 29.4689 14.2164 28.2546 12.5734C27.1831 11.1448 26.8259 9.35898 27.2545 7.57317C27.9688 4.64445 31.0404 2.50147 34.5406 2.50147H34.612C37.0407 2.50147 39.0408 3.50153 40.3266 5.2159C41.541 7.00171 41.8267 9.43041 41.1124 11.6448Z' />
                          </svg>
                        </span>
                        <p className='mb-4 text-base font-medium italic leading-[26px] text-blue-400'>
                        {(i18n.t('pageblog.fraseaqcion'))}
                        </p>
                        <span className='text-sm italic text-body-color'>
                          “Aqcion Digital”
                        </span>
                      </div>
                      </div>
                  </div>
                  <div className='text-center'>
                    <div className='relative z-10 inline-block m-10 '>
                      <img
                        src={graphic}
                        alt='image'
                        className='floating rounded-3xl shadow-xl w-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREENCHER  */}
      {/* <section
        id='pricing'
        className='relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  ??
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 sm:text-4xl md:text-[40px]'
                >
                  Titulo
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='w-full md:w-1/2 lg:w-1/3'>
              <div
                className='wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12'
                data-wow-delay='.15s
              '
              >
                <span
                  className='mb-2 block text-base font-medium uppercase text-dark'
                >
                  Titulo
                </span>
                <div className='mb-10'>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                </div>
                <span
                  className='absolute left-0 bottom-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary'
                >
                </span>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
              <div
                className='wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12'
                data-wow-delay='.15s
              '
              >
                <span
                  className='mb-2 block text-base font-medium uppercase text-dark'
                >
                  Titulo
                </span>
                <div className='mb-10'>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                  <p
                    className='mb-1 text-base font-medium leading-loose text-body-color'
                  >
                    Pensar
                  </p>
                </div>
                <span
                  className='absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary'
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ  */}
      <section
        className='relative z-20 overflow-hidden bg-[#f3f4ff] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-blue-600'>
                {(i18n.t('faq.title'))}
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-blue-400 sm:text-4xl md:text-[42px]'
                >
                  {(i18n.t('faq.subtitle'))}
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  {(i18n.t('faq.text'))}
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 lg:w-1/2'>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.1s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  {/* <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#3261a8'
                        stroke='#3261a8'
                      />
                    </svg>
                  </div> */}
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-blue-500 duration-300 ease-in-out'>
                      {(i18n.t('faq.pergunta1'))}
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                      {(i18n.t('faq.resposta1'))}
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.15s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  {/* <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#3261a8'
                        stroke='#3261a8'
                      />
                    </svg>
                  </div> */}
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-blue-500 duration-300 ease-in-out'>
                      {(i18n.t('faq.pergunta2'))}
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                      {(i18n.t('faq.resposta2'))}
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.2s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  {/* <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#3261a8'
                        stroke='#3261a8'
                      />
                    </svg>
                  </div> */}
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-blue-500 duration-300 ease-in-out'>
                      {(i18n.t('faq.pergunta3'))}
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                      {(i18n.t('faq.resposta3'))}
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2'>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.1s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  {/* <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#3261a8'
                        stroke='#3261a8'
                      />
                    </svg>
                  </div> */}
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-blue-500 duration-300 ease-in-out'>
                      {(i18n.t('faq.pergunta4'))}
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                      {(i18n.t('faq.resposta4'))}
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.15s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  {/* <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#3261a8'
                        stroke='#3261a8'
                      />
                    </svg>
                  </div> */}
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-blue-500 duration-300 ease-in-out'>
                      {(i18n.t('faq.pergunta5'))}
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                      {(i18n.t('faq.resposta5'))}
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
              <div
                className='single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8'
                data-wow-delay='.2s
              '
              >
                <button className='faq-btn flex w-full items-center text-left cursor-default'>
                  {/* <div
                    className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary'
                  >
                    <svg
                      width='17'
                      height='10'
                      viewBox='0 0 17 10'
                      className='icon fill-current'
                    >
                      <path
                        d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                        fill='#3261a8'
                        stroke='#3261a8'
                      />
                    </svg>
                  </div> */}
                  <div className='w-full'>
                    <details>
                      <summary className='text-base font-semibold text-black sm:text-lg cursor-pointer hover:text-blue-500 duration-300 ease-in-out'>
                      {(i18n.t('faq.pergunta6'))}
                      </summary>
                      <p className='py-3 text-base leading-relaxed text-body-color'>
                        {(i18n.t('faq.resposta6'))}
                      </p>
                    </details>
                  </div>
                </button>
                {/* <div className='faq-content hidden pl-[62px]'>
                  <p className='py-3 text-base leading-relaxed text-body-color'>
                    Colocar resposta
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 right-0 z-[-1]'>
          <svg
            width='1440'
            height='886'
            viewBox='0 0 1440 886'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.5'
              d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
              fill='url(#paint0_linear)'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='1308.65'
                y1='1142.58'
                x2='602.827'
                y2='-418.681'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#3261a8' stop-opacity='0.36' />
                <stop offset='1' stop-color='#F5F2FD' stop-opacity='0' />
                <stop offset='1' stop-color='#F5F2FD' stop-opacity='0.096144' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* FEEDBACKS  */}
      <section id='testimonials' className='pt-20 md:pt-[120px]'>
        <div className='container px-4'>
          <div className='flex flex-wrap'>
            <div className='mx-4 w-full'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-blue-600'>
                {(i18n.t('feedbacks.title'))}
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white sm:text-4xl md:text-[42px]'
                >
                  {(i18n.t('feedbacks.subtitle'))}
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  {(i18n.t('feedbacks.text'))}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial'
                data-wow-delay='.1s
              '
              >
                <div className='ud-testimonial-ratings mb-3 flex items-center'>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='ud-testimonial-content mb-6'>
                  <p className='text-base tracking-wide text-body-color'>
                  {(i18n.t('feedbacks.feed1'))}
                  </p>
                </div>
                <div className='ud-testimonial-info flex items-center'>
                  <div
                    className='ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full'
                  >
                    <img
                      src={pessoa2}
                      alt='author'
                    />
                  </div>
                  <div className='ud-testimonial-meta'>
                    <h4 className='text-sm text-gray-700 font-semibold'>Sabo Mathias</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial'
                data-wow-delay='.15s
              '
              >
                <div className='ud-testimonial-ratings mb-3 flex items-center'>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='ud-testimonial-content mb-6'>
                  <p className='text-base tracking-wide text-body-color'>
                  {(i18n.t('feedbacks.feed2'))}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                </div>
                <div className='ud-testimonial-info flex items-center'>
                  <div
                    className='ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full'
                  >
                    <img
                      src={pessoa3}
                      alt='author'
                    />
                  </div>
                  <div className='ud-testimonial-meta'>
                    <h4 className='text-sm text-gray-700 font-semibold'>Thamara German</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial'
                data-wow-delay='.2s
              '
              >
                <div className='ud-testimonial-ratings mb-3 flex items-center'>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 text-[#fbb040]'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      className='fill-current'
                    >
                      <path
                        d='M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z'
                      />
                    </svg>
                  </span>
                </div>
                <div className='ud-testimonial-content mb-6'>
                  <p className='text-base tracking-wide text-body-color'>
                  {(i18n.t('feedbacks.feed3'))}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                </div>
                <div className='ud-testimonial-info flex items-center'>
                  <div
                    className='ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full'
                  >
                    <img
                      src={pessoa1}
                      alt='author'
                    />
                  </div>
                  <div className='ud-testimonial-meta'>
                    <h4 className='text-sm text-gray-700 font-semibold'>Camila Souza</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='mx-4 w-full'>
              <div className='wow fadeInUp' data-wow-delay='.2s'>
                <div className='ud-title mb-8'>
                  <h6
                    className='relative inline-flex items-center text-xs font-normal text-white'
                  >
                    {(i18n.t('feedbacks.tecnologias'))}
                    <span className='ml-4 inline-block h-[1px] w-8 bg-[#d0d1d3]'>
                    </span>
                  </h6>
                </div>
                <div className='ud-brands-logo flex flex-wrap items-center'>
                  <div className='ud-single-logo mr-10 mb-5 max-w-[140px]'>
                    
                      <img
                        src={react}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                  </div>
                  <div className='ud-single-logo mr-10 mb-5 max-w-[140px]'>
                    
                      <img
                        src={angular}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                  </div>
                  <div className='ud-single-logo mr-10 mb-5 max-w-[160px]'>
                    
                      <img
                        src={flutterflow}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                  </div>
                  <div className='ud-single-logo mr-5 mb-5 max-w-[120px]'>
                    
                      <img
                        src={stripe}
                        alt=''
                        className='grayscale duration-300 hover:filter-none'
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPERS  */}
      <section id='team' className='pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[620px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-blue-600'>
                {(i18n.t('ceo.title'))}
                </span>
                <h2
                  className='mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[42px]'
                >
                  {(i18n.t('ceo.subtitle'))}
                </h2>
                <p
                  className='text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed'
                >
                  {(i18n.t('ceo.text'))}
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp mb-10' data-wow-delay='.15s'>
                <div
                  className='h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full'
                >
                  <img
                    src={menezes}
                    alt='image'
                    className='w-full rounded-full hover:scale-110 duration-200 ease-in-out'
                  />
                  <span className='absolute top-0 left-0 z-[-1]'>
                    <svg
                      width='71'
                      height='82'
                      viewBox='0 0 71 82'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.29337'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 1.29337 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 12.6747 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 24.0575 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 35.4379 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 46.8197 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 68.807 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 57.9443 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 1.29337 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 12.6747 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 24.0575 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 35.4379 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 46.8197 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 68.807 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 57.9433 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 1.29337 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 1.29337 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 12.6747 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 12.6747 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 24.0575 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 24.0575 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 35.4379 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 35.4379 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 46.8197 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 46.8197 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 68.807 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 68.807 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 57.9433 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 57.9443 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 1.29337 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 1.29337 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 12.6747 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 12.6747 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 24.0575 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 24.0575 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 35.4379 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 35.4379 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 46.8197 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 46.8197 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 68.807 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 68.807 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 57.9433 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 57.9443 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 1.29337 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 1.29337 1.2933)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 12.6747 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 12.6747 1.2933)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 24.0575 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 24.0575 1.29336)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 35.4379 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 35.4379 1.29336)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 46.8197 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 46.8197 1.29354)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 68.807 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 68.807 1.29354)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 57.9443 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 57.9443 1.29354)'
                        fill='#3261a8'
                      />
                    </svg>
                  </span>
                  <span className='absolute right-0 bottom-0'>
                    {/* <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z'
                        stroke='#13C296'
                      />
                    </svg> */}
                  </span>
                </div>
                <div className='text-center'>
                  <h4 className='mb-2 text-lg font-medium text-white'>{(i18n.t('ceo.nome1'))}</h4>
                  <p className='mb-5 text-sm font-medium text-body-color'>
                  {(i18n.t('ceo.cargo1'))}
                  </p>
                  <div className='flex items-center justify-center'>
                    <a
                      href='jhttps://www.linkedin.com/in/luiz-felipe-menezes-arruda-ba18a3268/'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-blue-300'
                    >
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z'
                        />
                      </svg>
                    </a>
                    <a
                      href='https://www.instagram.com/lwxzzz/'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-blue-300'
                    >
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z'
                        />
                        <path
                          d='M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z'
                        />
                        <path
                          d='M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp mb-10' data-wow-delay='.2s'>
                <div
                  className='h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full'
                >
                  <img
                    src={favarelli}
                    alt='image'
                    className='w-full rounded-full hover:scale-110 duration-200 ease-in-out'
                  />
                  <span className='absolute top-0 left-0 z-[-1]'>
                    <svg
                      width='71'
                      height='82'
                      viewBox='0 0 71 82'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.29337'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 1.29337 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 12.6747 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 24.0575 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 35.4379 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 46.8197 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 68.807 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 57.9443 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 1.29337 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 12.6747 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 24.0575 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 35.4379 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 46.8197 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 68.807 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 57.9433 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 1.29337 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 1.29337 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 12.6747 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 12.6747 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 24.0575 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 24.0575 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 35.4379 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 35.4379 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 46.8197 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 46.8197 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 68.807 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 68.807 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 57.9433 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 57.9443 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 1.29337 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 1.29337 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 12.6747 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 12.6747 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 24.0575 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 24.0575 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 35.4379 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 35.4379 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 46.8197 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 46.8197 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 68.807 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 68.807 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 57.9433 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 57.9443 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 1.29337 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 1.29337 1.2933)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 12.6747 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 12.6747 1.2933)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 24.0575 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 24.0575 1.29336)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 35.4379 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 35.4379 1.29336)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 46.8197 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 46.8197 1.29354)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 68.807 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 68.807 1.29354)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 57.9443 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 57.9443 1.29354)'
                        fill='#3261a8'
                      />
                    </svg>
                  </span>
                  <span className='absolute right-0 bottom-0'>
                    {/* <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z'
                        stroke='#13C296'
                      />
                    </svg> */}
                  </span>
                </div>
                <div className='text-center'>
                  <h4 className='mb-2 text-lg font-medium text-white'>
                  {(i18n.t('ceo.nome2'))}
                  </h4>
                  <p className='mb-5 text-sm font-medium text-body-color'>
                  {(i18n.t('ceo.cargo2'))}
                  </p>
                  <div className='flex items-center justify-center'>
                    <a
                      href='https://www.linkedin.com/in/thaiza-favarelli-da-silva-082978220/'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-blue-300'
                    >
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z'
                        />
                      </svg>
                    </a>
                    <a
                      href='https://www.instagram.com/tfavarelli/'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-blue-300'
                    >
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z'
                        />
                        <path
                          d='M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z'
                        />
                        <path
                          d='M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp mb-10' data-wow-delay='.25s'>
                <div
                  className='h-170px] relative z-10 mx-auto mb-6 w-[170px] rounded-full'
                >
                  <img
                    src={nonato}
                    alt='image'
                    className='w-full rounded-full hover:scale-110 duration-200 ease-in-out'
                  />
                  <span className='absolute top-0 left-0 z-[-1]'>
                    <svg
                      width='71'
                      height='82'
                      viewBox='0 0 71 82'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.29337'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 1.29337 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 12.6747 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 24.0575 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 35.4379 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 46.8197 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 68.807 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='80.7066'
                        r='1.29337'
                        transform='rotate(-90 57.9443 80.7066)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 1.29337 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 12.6747 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 24.0575 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='69.3249'
                        r='1.29337'
                        transform='rotate(-90 35.4379 69.3249)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 46.8197 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 68.807 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='69.325'
                        r='1.29337'
                        transform='rotate(-90 57.9433 69.325)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 1.29337 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 1.29337 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 12.6747 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 12.6747 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 24.0575 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 24.0575 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='57.9433'
                        r='1.29337'
                        transform='rotate(-90 35.4379 57.9433)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='24.0568'
                        r='1.29337'
                        transform='rotate(-90 35.4379 24.0568)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 46.8197 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 46.8197 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 68.807 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 68.807 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='57.9431'
                        r='1.29337'
                        transform='rotate(-90 57.9433 57.9431)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='24.0567'
                        r='1.29337'
                        transform='rotate(-90 57.9443 24.0567)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 1.29337 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 1.29337 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 12.6747 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 12.6747 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 24.0575 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 24.0575 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 35.4379 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 35.4379 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 46.8197 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 46.8197 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 68.807 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 68.807 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9433'
                        cy='46.5615'
                        r='1.29337'
                        transform='rotate(-90 57.9433 46.5615)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='12.6751'
                        r='1.29337'
                        transform='rotate(-90 57.9443 12.6751)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 1.29337 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='1.29337'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 1.29337 1.2933)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 12.6747 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='12.6747'
                        cy='1.2933'
                        r='1.29337'
                        transform='rotate(-90 12.6747 1.2933)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 24.0575 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='24.0575'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 24.0575 1.29336)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='35.1798'
                        r='1.29337'
                        transform='rotate(-90 35.4379 35.1798)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='35.4379'
                        cy='1.29336'
                        r='1.29337'
                        transform='rotate(-90 35.4379 1.29336)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 46.8197 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='46.8197'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 46.8197 1.29354)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 68.807 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='68.807'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 68.807 1.29354)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='35.18'
                        r='1.29337'
                        transform='rotate(-90 57.9443 35.18)'
                        fill='#3261a8'
                      />
                      <circle
                        cx='57.9443'
                        cy='1.29354'
                        r='1.29337'
                        transform='rotate(-90 57.9443 1.29354)'
                        fill='#3261a8'
                      />
                    </svg>
                  </span>
                  <span className='absolute right-0 bottom-0'>
                    {/* <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z'
                        stroke='#13C296'
                      />
                    </svg> */}
                  </span>
                </div>
                <div className='text-center'>
                  <h4 className='mb-2 text-lg font-medium text-white'>
                  {(i18n.t('ceo.nome3'))}
                  </h4>
                  <p className='mb-5 text-sm font-medium text-body-color'>
                  {(i18n.t('ceo.cargo3'))}
                  </p>
                  <div className='flex items-center justify-center'>
                    <a
                      href='https://www.linkedin.com/in/gustavo-nonato-591078200/'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-blue-300'
                    >
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z'
                        />
                      </svg>
                    </a>
                    <a
                      href='https://www.instagram.com/gustavo.nonatoo/'
                      className='mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-blue-300'
                    >
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 18 18'
                        className='fill-current'
                      >
                        <path
                          d='M8.90245 12.1939C10.7363 12.1939 12.2229 10.7073 12.2229 8.87352C12.2229 7.0397 10.7363 5.5531 8.90245 5.5531C7.06863 5.5531 5.58203 7.0397 5.58203 8.87352C5.58203 10.7073 7.06863 12.1939 8.90245 12.1939Z'
                        />
                        <path
                          d='M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z'
                        />
                        <path
                          d='M13.7397 3.03418C13.3676 3.03418 13.0527 3.34905 13.0527 3.72116C13.0527 4.09328 13.3676 4.40815 13.7397 4.40815C14.1118 4.40815 14.4267 4.09328 14.4267 3.72116C14.4267 3.34905 14.1405 3.03418 13.7397 3.03418Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO  */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div
          className='absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2'
        ></div>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
              <div className='ud-contact-content-wrapper'>
                <div className='ud-contact-title mb-12 lg:mb-[150px]'>
                  <span className='mb-5 text-base font-semibold text-blue-500'>
                  {(i18n.t('contato.title'))}
                  </span>
                  <h2 className='text-[35px] font-semibold'>
                  {(i18n.t('contato.text1'))} <br />
                    {(i18n.t('contato.text2'))}
                  </h2>
                </div>
                <div className='mb-12 flex flex-wrap justify-between lg:mb-0'>
                  <div className='mb-8 flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-blue-500'>
                      <svg
                        width='34'
                        height='25'
                        viewBox='0 0 34 25'
                        className='fill-current'
                      >
                        <path
                          d='M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className='mb-6 text-lg text-blue-500 font-semibold'>{(i18n.t('contato.text3'))}</h5>
                      <p className='text-base text-body-color'>{(i18n.t('contato.email'))}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
              <div
                className='wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]'
                data-wow-delay='.2s
              '
              >
                <h3 className='mb-8 text-2xl font-semibold md:text-[26px]'>
                {(i18n.t('contato.titleforms'))}
                </h3>
                <form onSubmit={sendEmail}>
                  <div className='mb-6'>
                    <label for='fullName' className='block text-xs text-blue-500'
                    >{(i18n.t('contato.lblnome'))} </label>
                    <input
                      type='text'
                      name='fullName'
                      placeholder='Aqcion Digital'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className='w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-blue-600 focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label for='email' className='block text-xs text-blue-500'
                    >{(i18n.t('contato.lblemail'))} </label>
                    <input
                      type='email'
                      name='email'
                      placeholder='aqciondigi@gmail.com'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className='w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-blue-600 focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label for='phone' className='block text-xs text-blue-500'
                    >{(i18n.t('contato.lblPhone'))} </label>
                    <input
                      type='text'
                      name='phone'
                      placeholder='+55 19 9..'
                      onChange={(e) => setCelular(e.target.value)}
                      value={celular}
                      className='w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-blue-600 focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label for='message' className='block text-xs text-blue-500'
                    >{(i18n.t('contato.lblmensagem'))} </label>
                    <textarea
                      name='message'
                      rows='1'
                      placeholder='digite sua mensagem aqui'
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className='w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-blue-600 focus:outline-none'
                    ></textarea>
                  </div>
                  <div className='mb-0'>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-600'
                    >
                      {(i18n.t('contato.btnenviar'))}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Maps/>

      {/* FOOTER */}
      <footer
        className='wow fadeInUp relative z-10 bg-black mt-24'
        data-wow-delay='.15s'
      >
        <div className='container'>
          <div className='footerinfo -mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a
                  href='javascript:void(0)'
                  className='mb-6 inline-block max-w-[160px]'
                >
                  <img
                    src={logo2}
                    alt='logo'
                    className='w-44 hover:rotate-6 scale-110 duration-200 ease-in-out'
                  />
                </a>
                <p className='mb-7 text-base text-[#f3f4fe]'>
                {(i18n.t('footer.text'))}
                </p>
                <div className='-mx-3 flex items-center'>
                  <a
                    href='https://www.instagram.com/aqcion.digital/'
                    className='px-3 text-[#dddddd] hover:text-white'
                  >
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 18 18'
                      className='fill-current'
                    >
                      <path
                        d='M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z'
                      />
                      <path
                        d='M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z'
                      />
                      <path
                        d='M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-2/3 lg:w-6/12'>
              <div className='mb-10 w-full'>
                <h4 className='mb-9 text-lg font-semibold text-white'>{(i18n.t('footer.tecnologia'))}</h4>
                <ul className='flex flex-wrap items-center'>
                  <li>
                      <img
                        src={react}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={angular}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={flutterflow}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={stripe}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={tailwindwhite}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={firebasewhite}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={js}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={djangowhite}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                  <li>
                      <img
                        src={mysql}
                        alt=''
                        className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
                      />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-opacity-40 py-8 lg:mt-[60px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap'>

              <div className='w-full px-4 md:w-1/3'>
                <div className='my-1 flex justify-center md:justify-end'>
                  <p className='text-base text-[#f3f4fe]'>
                  {(i18n.t('footer.by'))}
                    <a
                      href=''
                      rel='nofollow noopner'
                      target=''
                      className='text-blue-600 hover:underline ml-1'
                    >
                      Aqcion Digital
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src={footershape3} alt='' />
          </span>
          <span className='absolute top-0 right-0 z-[-1]'>
            <svg
              width='102'
              height='102'
              viewBox='0 0 102 102'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
            </svg>
          </span>
        </div>
      </footer>
      <a
        href='javascript:void(0)'
        className='back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark'
      >
        <span
          className='mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white'
        ></span>
      </a>
      {/* <script src='../assets/js/init.js'/> */}
    </>
  );
}

export default AqcionD;



