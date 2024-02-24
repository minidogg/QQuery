qquery.random = {}
qquery.random.hex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
qquery.random.int = (max,min)=>{return Math.floor(Math.random() * (max - min) ) + min;}
qquery.random.float = (max,min)=>{return Math.random() * (max - min)  + min;}
