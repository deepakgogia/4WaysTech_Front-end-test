import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { GamePage } from '../Components/GamePage';
import { Credits } from '../Components/Credits';
import { HomePage } from './../Pages/HomePage';
export const AppRoute = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/gamepage" component={GamePage} />
                <Route path="/credits" component={Credits} />
                <Route component={HomePage} />
            </Switch>
        </BrowserRouter>
    </>
)