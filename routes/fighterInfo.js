const express = require('express');

// const Router = (module.exports = express.Router());
const Router = express.Router();

const fighter = [
  {
    name: 'Gordon Ryan',
    birth: '07/07/1995',
    bio:
      'Gordon Ryan is a New Jersey (USA) born grappler and member of the well-known group – Danaher Death Squad (DDS), known particularly in jiu-jitsu‘s no-gi and submission only circuit where he beat big names of the sport such as Alexandre Ribeiro, Romulo Barral, and Gabriel Arges. A submission orientated competitor and one of the leading jiu-jitsu figures of his generation, Gordon cemented his name as one of the top brown belts on the planet in 2015 by winning the Newaza Challenge and No-Gi World Championship, which led to his black belt promotion under Garry Tonon – this way becoming Tonon’s first ever student to achieve the rank, a belt responsibility shared with another one of Gordon’s coaches, John Danaher.'
  },
  {
    name: 'Craig Jones',
    birth: '17/07/1991',
    bio:
      'Craig Jones is an Australian grappler and Brazilian jiu-jitsu black belt under Lachlan Giles who competes for the Absolute MMA Academy in the sport’s international circuit. An International Brazilian Jiu-Jitsu Federation (IBJJF) World No-Gi Champion (2015 at in purple belt division) and a 2x ADCC Trials champion, Craig Jones turned many heads his way at the 2017 ADCC finals by submitting the tournament’s 88-kilogram #1 pick, Leandro Lo. Jones’ would later cement his status as one of the best grapplers of his generation by winning numerous prestigious event, including multiple belt titles in the Polaris Invitational promotion.'
  },
  {
    name: 'Joao Myiao',
    birth: '11/05/1991',
    bio:
      'João Miyao is a Brazilian Jiu-Jitsu black belt under Cicero Costha who competes for the PSLPB academy (Projeto Social Lutando Pelo Bem) and Unity Jiu-Jitsu in this sport/martial-arts international circuit. Considered a prodigy of BJJ since his teens, João and his twin brother Paulo Miyao (commonly known as the Miyao Brothers) have piled up medals in the globe’s most important tournaments, both being among the very best competitors of their generation.'
  },
  {
    name: 'Paulo Myiao',
    birth: '11/05/1991',
    bio:
      'Paulo Miyao is a black belt in Jiu Jitsu under Cicero Costha. Considered a phenomenon of the sport since his teens, Paulo and his twin brother João Miyao, conquered all major titles in this sport while climbing its ranks, including a gold medal in the open weight division of the IBJJF World Championship (2013 brown belt), an amazing accomplishment for a light featherweight competitor (64kg/141lbs).'
  },
  {
    name: 'Dillon Danis',
    birth: '22/08/1993',
    bio:
      'Dillon Danis is a Brazilian jiu jitsu black belt under Marcelo Garcia, being part of a fruitful generation of grapplers produced by the well respected Alliance New York academy head coach. Danis became a BJJ fan household name after his 2014 brown belt run, through his eye-pleasing performances in some of jiu jitsu’s hardest tournaments, where he showcased a forward moving style which recognition in the sport. In 2016 Danis’ accomplishments led Irish mixed martial arts (MMA) fighter and Ultimate Fighting Championship (UFC) star Conor McGregor to hire his services in the capacity of grappling coach ahead of UFC 202 ‘Diaz vs. McGregor 2’ event.'
  }
];

Router.get('/fighterInfo', (req, res) => {
  res.status(200).send(fighter);
});

Router.post('/addFighter', (req, res) => {
  const newFighter = req.body;
  fighter.push(req.body);
  res.status(200).send(fighter);
});

module.exports = Router;
