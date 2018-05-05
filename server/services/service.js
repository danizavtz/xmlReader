(function() {
    'use strict';
    const fs = require('fs');
    const xml2js = require('xml2js');
    const filename = __dirname + "/../../xml/saida.xml"
    
    exports.logData = (req, res) => {
        let parser = new xml2js.Parser();
        parser.parseString(req.infoxml, function(err, result) {
            if (err) {
                return res.status(500).json({ errors: ['Não foi possível ler arquivo.'] });
            }
            let jsonstr = {}
            jsonstr.title = result.rss.channel[0].title
            jsonstr.descricao = result.rss.channel[0].description
            jsonstr.ep = []
            for (let i = 0; i < req.body.quantity;i++) {
                jsonstr.ep.push(result.rss.channel[0].item[i])
            }
            console.log(jsonstr.ep.length);
            res.json(jsonstr);
            res.end();
        });
    };

    exports.lookUpData = (req, res, next) => {
        let buf = fs.readFileSync(filename, "utf8");
        req.infoxml = buf;
        next();
    };

}());