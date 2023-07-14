import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import HomeScreen from './home';
import NaviagtionBottom from './navigation';
import SearchView from './search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<BrowserRouter>
	  <Routes>
	  	<Route
			path='/'
			element={<Navigate to="/home"/>}
		/>
		<Route
			path='/home'
			element={<HomeScreen/>}
		/>
		<Route
			path='/search'
			element={<SearchView/>}
		/>
	  </Routes><NaviagtionBottom/>
	</BrowserRouter>
	
  </React.StrictMode>
);

