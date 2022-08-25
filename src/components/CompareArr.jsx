import scooters1 from "../assets/img/scooters/scooter1.svg"
import scooters2 from "../assets/img/scooters/scooter2.svg"
import scooters3 from "../assets/img/scooters/scooter3.svg"
import scooters4 from "../assets/img/scooters/scooter4.svg"
import scooters5 from "../assets/img/scooters/scooter5.svg"
import scooters6 from "../assets/img/scooters/scooter6.svg"
import scooters7 from "../assets/img/scooters/scooter7.svg"
import scooters8 from "../assets/img/scooters/scooter8.svg"
import scooters9 from "../assets/img/scooters/scooter9.svg"
import scooters10 from "../assets/img/scooters/scooter10.svg"
import scooters11 from "../assets/img/scooters/scooter11.svg"
import scooters12 from "../assets/img/scooters/scooter12.svg"
import scooters13 from "../assets/img/scooters/scooter13.svg"

const compareArr = [
    {
        id:1, img: `${scooters1}`, title: "NiNinebot Kickscooter E22", speed: "20 км/ч", miles: "22км", battery: "5100 mAh", netWeight: "13.5 кг", payload: "25 кг - 100 кг", charginTime: "3.5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.071kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$599.99"
    },
    {
        id:2, img: `${scooters2}`, title: "NiNinebot Kickscooter ES1l", speed: "20 км/ч", miles: "20км", battery: "184 mAh", netWeight: "10.3 кг", payload: "30 кг - 100 кг", charginTime: "6 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 250W", powerOutput: "42W (0.0042kW)", maxIncline: "7%", shockAbsorption: "Передняя", safety: "----", atmosphereLight: "----", price: "$389.99"
    },
    {
        id:3, img: `${scooters3}`, title: "NiNinebot Kickscooter Air T15", speed: "20 км/ч", miles: "12км", battery: "4000 mAh", netWeight: "10.5 кг", payload: "30 кг - 100 кг", charginTime: "4 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.071kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$819.99"
    },
    {
        id:4, img: `${scooters4}`, title: "NiNinebot Kickscooter f30", speed: "25 км/ч", miles: "30км", battery: "7650   mAh", netWeight: "15.1 кг", payload: "20 кг - 120 кг", charginTime: "5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.070kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$649.99"
    },
    {
        id:5, img: `${scooters5}`, title: "NiNinebot Kickscooter E22", speed: "20 км/ч", miles: "22км", battery: "5100 mAh", netWeight: "13.5 кг", payload: "25 кг - 100 кг", charginTime: "3.5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.071kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$599.99"
    },
    {
        id:6, img: `${scooters6}`, title: "NiNinebot Kickscooter ES1l", speed: "20 км/ч", miles: "20км", battery: "184 mAh", netWeight: "10.3 кг", payload: "30 кг - 100 кг", charginTime: "6 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 250W", powerOutput: "42W (0.0042kW)", maxIncline: "7%", shockAbsorption: "Передняя", safety: "----", atmosphereLight: "----", price: "$389.99"
    },
    {
        id:7, img: `${scooters7}`, title: "NiNinebot Kickscooter Air T15", speed: "20 км/ч", miles: "12км", battery: "4000 mAh", netWeight: "10.5 кг", payload: "30 кг - 100 кг", charginTime: "4 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.071kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$819.99"
    },
    {
        id:8, img: `${scooters8}`, title: "NiNinebot Kickscooter f30", speed: "25 км/ч", miles: "30км", battery: "7650   mAh", netWeight: "15.1 кг", payload: "20 кг - 120 кг", charginTime: "5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.070kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$649.99"
    }, 
    {
        id:9, img: `${scooters9}`, title: "NiNinebot Kickscooter E22", speed: "20 км/ч", miles: "22км", battery: "5100 mAh", netWeight: "13.5 кг", payload: "25 кг - 100 кг", charginTime: "3.5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.071kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$599.99"
    },
    {
        id:10, img: `${scooters10}`, title: "NiNinebot Kickscooter ES1l", speed: "20 км/ч", miles: "20км", battery: "184 mAh", netWeight: "10.3 кг", payload: "30 кг - 100 кг", charginTime: "6 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 250W", powerOutput: "42W (0.0042kW)", maxIncline: "7%", shockAbsorption: "Передняя", safety: "----", atmosphereLight: "----", price: "$389.99"
    },
    {
        id:11, img: `${scooters11}`, title: "NiNinebot Kickscooter Air T15", speed: "20 км/ч", miles: "12км", battery: "4000 mAh", netWeight: "10.5 кг", payload: "30 кг - 100 кг", charginTime: "4 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.071kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$819.99"
    },
    {
        id:12, img: `${scooters12}`, title: "NiNinebot Kickscooter f30", speed: "25 км/ч", miles: "30км", battery: "7650   mAh", netWeight: "15.1 кг", payload: "20 кг - 120 кг", charginTime: "5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.070kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$649.99"
    },
    {
        id:13, img: `${scooters13}`, title: "NiNinebot Kickscooter f30", speed: "25 км/ч", miles: "30км", battery: "7650   mAh", netWeight: "15.1 кг", payload: "20 кг - 120 кг", charginTime: "5 часа", numberOfBatteries: "1 встроенная", motorPower: "Номинальная 300W", powerOutput: "71W (0.070kW)", maxIncline: "15%", shockAbsorption: "----", safety: "Задний LED-фонарь", atmosphereLight: "----", price: "$649.99"
    }
]

export default compareArr