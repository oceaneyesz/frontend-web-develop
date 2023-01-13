/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.

 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the
disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : Zhao Yuyang 
 * Student ID : 1155181315 
 * Date : 2022.12.15
 */ 
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // include bootstrap
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
