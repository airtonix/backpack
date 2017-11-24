import dispatch from 'micro-route/dispatch';
import {send} from 'micro';
import config from './config';


export default async (req, res) => {
  await dispatch()
    .dispatch('*', ['GET'], (req, res) => send({config: config.get()}))(req, res)
}
