import database from '@react-native-firebase/database';

export const StockData = [
    {
        id: 1,
        name: 'Aqua Ro',
        url: 'https://images-na.ssl-images-amazon.com/images/I/51lAFreW2XL.jpg',
        description: 'Aqua Ro Spare Parts-Ro Membrane Housing For Water Filter Purifiers+Spanner For Membrane Change. Solid Filter Cartridge',
        price: 400
    },
    {
        id: 2,
        name: 'tap',
        url: 'https://images-na.ssl-images-amazon.com/images/I/414oAU32BJL.jpg',
        description: 'additional tap asjdhasjhdkgsalksdlkjasdjkljsakdjaklsjdkjhsahkdjaskljdhjkjaflkj',
        price: 200
    },
    {
        id: 3,
        name: 'SHRUTI Brass RO Nozzle/Aqua',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VIU1mluoqTgEboP3gVAANOavKANHo6uC_wN5Uq417nqYkPDge3arEgcNWYERqYRB2rpz7bUP&usqp=CAc',
        description: 'Guard Valve Connector for RO/UV/Water Purifier/Water Filter Jointer - 1896 ',
        price: 200
    },
    {
        id: 4,
        name: 'Aquahouse UV Lamp Sediment Pre Filter',
        url: 'https://5.imimg.com/data5/QR/FU/MY-26999208/pre-filter-500x500.jpg',
        description: 'Guard Valve Connector for RO/UV/Water Purifier/Water Filter Jointer - 1896 ',
        price: 350
    },
    {
        id: 5,
        name: 'Kent Alkaline Water Filter Pitcher',
        url: 'https://5.imimg.com/data5/SR/UL/SL/SELLER-26999208/kent-alkaline-water-filter-pitcher-500x500.jpg',
        description: 'KENT Alkaline Water Filter Pitcher, to provide you and your family with safe',
        price: 350
    },

]


export const fetchstockService = async () => {

  var stockData = await database()
        .ref('stocks')
        .once('value')
        .then(snapshot => {
            // console.log('Use data: ', snapshot.val().id);
            var data = snapshot.val()

            console.log('dataaaaaa')
            return data
        });
    // console.log('before')
    // console.log(stockData)
    // console.log('after')


    // const Stocks = await stockData;

    return stockData;
}