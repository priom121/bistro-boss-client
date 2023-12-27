import { useState } from 'react';
import Cover from '../../../SharedFolder/Cover/Cover';
import orderFood from '../../../assets/contact/banner.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseAuth from '../../../Hook/UseAuth';
import OrderTab from './Tab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad','pizza','soups','dessert','drinks']
  const {category} =useParams()
  const intialIndex = categories.indexOf(category)
  const [tabIndex ,setTabIndex] =useState(intialIndex)
  const [items] =UseAuth()

  const dessert = items.filter(item=>item.category ==='dessert')

  console.log(category);
  const pizza = items.filter(item=>item.category === 'pizza')
  const salad = items.filter(item=>item.category ==='salad')
  const soup = items.filter(item=>item.category ==='soup') 
  const drinks = items.filter(item=>item.category ==='drinks') 
return (
 <div>
       <Helmet>
       <title> Bistro | orderFood</title>
     </Helmet>
     <Cover img={orderFood} title={'Order Food'}></Cover>
     <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>soups</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
  <OrderTab items={salad}> </OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}> </OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}> </OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}> </OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}> </OrderTab>
  </TabPanel>
</Tabs>                                                                                     
  </div>
);
};

export default Order;