import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';

import {doFilter} from '../../Action/index';
import { useEffect } from 'react';

const Filter = () => {

    const dispatch = useDispatch();

    const data = [
        {
            location: 'delhi',
            type: 'house',
            address: 'red fort NCR',
            price: 500,
            beds: 1,
            bathroom: 1,
            size: '7x3'
        },
        {
            location: 'delhi',
            type: 'house',
            address: 'LalKila city Nehru palace',
            price: 1200,
            beds: 3,
            bathroom: 2,
            size: '14x5'
        },
        {
            location: 'delhi',
            type: 'villa',
            address: 'Minashi market near station',
            price: 900,
            beds: 2,
            bathroom: 1,
            size: '5x4'
        },
        {
            location: 'delhi',
            type: 'villa',
            address: 'Nehru palace near temple',
            price: 1900,
            beds: 4,
            bathroom: 5,
            size: '50x40'
        },
        {
            location: 'delhi',
            type: 'bungalow',
            address: 'super market super station',
            price: 2500,
            beds: 8,
            bathroom: 4,
            size: '500x400'
        },
        {
            location: 'delhi',
            type: 'bungalow',
            address: 'new new wisdow local street',
            price: 1500,
            beds: 3,
            bathroom: 2,
            size: '150x450'
        },
        {
            location: 'delhi',
            type: 'mansion',
            address: 'local street jawahar lal road',
            price: 2500,
            beds: 3,
            bathroom: 2,
            size: '5000x4000'
        },
        {
            location: 'delhi',
            type: 'mansion',
            address: 'downtown hill downtown pizza',
            price: 1900,
            beds: 5,
            bathroom: 3,
            size: '105x104'
        },
        {
            location: 'Punjab',
            type: 'house',
            address: 'Hariyana near college',
            price: 1000,
            beds: 4,
            bathroom: 3,
            size: '20x10'
        },
        {
            location: 'Punjab',
            type: 'house',
            address: 'New Police station',
            price: 200,
            beds: 5,
            bathroom: 4,
            size: '100x25'
        },
        {
            location: 'Punjab',
            type: 'villa',
            address: 'Post office kali market',
            price: 1500,
            beds: 10,
            bathroom: 7,
            size: '2000x 1000'
        },
        {
            location: 'Punjab',
            type: 'villa',
            address: 'Post office kali market',
            price: 1600,
            beds: 5,
            bathroom: 2,
            size: '3000x 1000'
        },
        {
            location: 'Punjab',
            type: 'bungalow',
            address: 'super street new road',
            price: 2000,
            beds: 4,
            bathroom: 1,
            size: '2500x 1000'
        },
        {
            location: 'Punjab',
            type: 'mansion',
            address: 'NH-27 new road down',
            price: 1500,
            beds: 3,
            bathroom: 2,
            size: '1000x 1000'
        },
        {
            location: 'Bihar',
            type: 'house',
            address: 'kalambhag chow 201575 street',
            price: 700,
            beds: 2,
            bathroom: 1,
            size: '70x30'
        },
        {
            location: 'Bihar',
            type: 'house',
            address: 'Temple Temple road',
            price: 1300,
            beds: 3,
            bathroom: 2,
            size: '104x500'
        },
        {
            location: 'Bihar',
            type: 'villa',
            address: 'situation road headache street',
            price: 1900,
            beds: 8,
            bathroom: 10,
            size: '500x40'
        },
        {
            location: 'Bihar',
            type: 'villa',
            address: 'Bank road near SBI road',
            price: 2100,
            beds: 3,
            bathroom: 5,
            size: '500x400'
        },
        {
            location: 'Bihar',
            type: 'bungalow',
            address: 'lay low street gunda market',
            price: 1000,
            beds: 8,
            bathroom: 4,
            size: '500x400'
        },
        {
            location: 'bihar',
            type: 'bungalow',
            address: 'diwan road diwan road',
            price: 1500,
            beds: 3,
            bathroom: 2,
            size: '150x450'
        },
        {
            location: 'bihar',
            type: 'mansion',
            address: 'l street jawahar lal road',
            price: 2500,
            beds: 30,
            bathroom: 20,
            size: '5000x4000'
        },
        {
            location: 'bihar',
            type: 'mansion',
            address: 'downtown hill downtown pizza',
            price: 1900,
            beds: 5,
            bathroom: 3,
            size: '105x104'
        },
    ]

    useEffect(() => {
        dispatch(doFilter(data))
    }, [])

    const getData = () => {
        const getLocation = document.getElementById('location').value;
        const getDate = document.getElementById('date').value;
        const getPrice = document.getElementById('price').value;
        const getHouseType = document.getElementById('house_type').value;

        const filter1 = data.filter(item => {
            return item.location.toLowerCase() === getLocation.toLowerCase();
        });

        const filter2 = filter1.filter(item => {
            return item.type.toLowerCase() === getHouseType.toLowerCase()
        })

        const filter3 = filter2.filter(item => {
            const splitprice = getPrice.indexOf('-');
            const lowerPrice = Number(getPrice.slice(0, splitprice));
            const higherPrice = Number(getPrice.slice(splitprice+1))

            return lowerPrice <= item.price && higherPrice >= item.price;

        })

        // console.log(filter3);

        const filter4 = filter3.filter(item => {
            const q = new Date();
            const m = q.getMonth();
            const d = q.getDate();
            const y = q.getFullYear();
            const query = getDate.indexOf('-');
            const query1 = getDate.lastIndexOf('-');
            const year = getDate.slice(0, query);
            const month = getDate.slice(query+1, query1);
            const date = getDate.slice(query1+1);
            let showOrNot = false;


            if(y <= year && m <= month && d <= date){
                showOrNot = true;
            }else {
                showOrNot = false;
            }

            if( showOrNot) return item;
        })

        console.log(filter4)

        dispatch(doFilter(filter4));

    }

    // const data = [
    //     {
    //         location: 'delhi',
    //         address: 'red fort NCR',
    //         price: 500,
    //         beds: 1,
    //         bathroom: 1,
    //         size: '7x3'
    //     },
    //     {
    //         location: 'delhi',
    //         address: 'LalKila city Nehru palace',
    //         price: 1200,
    //         beds: 3,
    //         bathroom: 2,
    //         size: '14x5'
    //     },
    //     {
    //         location: 'delhi',
    //         address: 'Minashi market near station',
    //         price: 900,
    //         beds: 2,
    //         bathroom: 1,
    //         size: '5x4'
    //     },
    //     {
    //         location: 'Punjab',
    //         address: 'Hariyana near college',
    //         price: 1000,
    //         beds: 4,
    //         bathroom: 3,
    //         size: '20x10'
    //     },
    //     {
    //         location: 'Punjab',
    //         address: 'New Police station',
    //         price: 2000,
    //         beds: 5,
    //         bathroom: 4,
    //         size: '100x25'
    //     },
    //     {
    //         location: 'Punjab',
    //         address: 'Post office kali market',
    //         price: 2500,
    //         beds: 10,
    //         bathroom: 7,
    //         size: '200x 100'
    //     }
    // ]

    return(
        <div className="filter">
            
            <div>
                <p>Location</p>
                <input type='text' name="location" id='location' required/>
            </div>
            <div>
                <p>When</p>
                <input type='date' name='date' required id='date'/>
            </div>
            <div>
                <p>Price</p>
                <select id='price'>
                    <option value="100-500">$100-$500</option>
                    <option value="500-1500">$500-$1500</option>
                    <option value="1000-3000">$1000-$3000</option>
                    
                </select>
            </div>
            <div>
                <p>Property type</p>
                <select id='house_type'>
                    <option value='house'>House</option>
                    <option value='villa'>Villa</option>
                    <option value='bungalow'>Bungalow</option>
                    <option value='mansion'>Mansion</option>
                </select>
            </div>

            <button onClick={getData}>Search</button>
            
        </div>
    )
}

export default Filter;