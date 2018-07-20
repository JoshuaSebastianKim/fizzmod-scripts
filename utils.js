const fs = require('fs');
const path = require('path');

const environmentMap = {
	AR: 'jumboargentina',
	AR_QA: 'jumboargentinaqa',
	CL: 'jumbo',
	CL_QA: 'jumbochilehomolog',
	CO: 'jumbocolombiafood',
	PE: 'wongfood',
	PE_QA: 'wongfoodqa'
};

function createConfigModule(country) {
	const uploaderConf = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../vtex-uploader.conf'), 'utf8'));
	const vtexEnvironment = environmentMap[country];
	const fks = uploaderConf.environments[vtexEnvironment].fks[vtexEnvironment];

	const config = {
		ENV: country.replace('_QA', ''),
		isPROD: !/QA/.test(country),
		FKS: fks
	};

	const configModule = `module.exports=${JSON.stringify(config)};`;

	fs.writeFileSync(path.resolve(__dirname, './config.js'), configModule);

	return config;
}

module.exports = {
	createConfigModule
};
