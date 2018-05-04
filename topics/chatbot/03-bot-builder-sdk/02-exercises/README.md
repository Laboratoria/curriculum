# Ejercicios

* Tipo: `practice`
* Formato: `guiado`
* Duración: `90min`

***

## Configuración de ambiente para desarrollar nuestro primer bot

Para configurar nuestro ambiente, realizaremos los siguientes pasos:

1. Instalar `Node.js`.

2. Abrir Visual Studio Code.

3. Ir al menú Ver -> Terminal Integrado y verificar que Node.js está funcionando
   correctamente.

4. Instalar `restify` y `botbuilder` con el siguiente comando:

   ```sh
   npm install --save restify botbuilder
   ```

### Caso 1: Saluda a tu bot

```js
var builder = require ('botbuilder')
var restify = require ('restify')

var server = restify.createServer()
server.listen (3978, function () {
    console.log ('%s escuchando en %s', server.name, server.url)
})

var connector = new builder.ChatConnector ({
    appId: '',
    appPassword: ''
})

server.post ('/api/messages', connector.listen())

var bot = new builder.UniversalBot (connector, [
    function (session) {
        builder.Prompts.text(session, '¡Hola! ¿Cómo te llamas?')
    },
    function (session, results) {
        session.endDialog(`Hola ${results.response}`)
    }
])
```

### Caso 2: Delivery

En este caso solucionaremos un ejemplo común de un restaurante que realiza servicio
por delivery.

```js
var builder = require ('botbuilder')
var restify = require ('restify')

var server = restify.createServer()
server.listen (3978, function () {
    console.log ('%s escuchando en %s', server.name, server.url)
})

var connector = new builder.ChatConnector ({
    appId: '',
    appPassword: ''
})

server.post ('/api/messages', connector.listen())

var store = {
    name : '',
    option : '',
    where: '',
}

// This dialog help the user order dinner to be delivered to their hotel room.
var dinnerMenu = {
    'Arroz con pollo - $ 5.99': {
        Description: 'Arroz con pollo',
        Price: 5.99
    },
    'Lomo Saltado - $ 6.89': {
        Description: 'Lomo Saltado',
        Price: 6.89
    },
    'Ceviche - $ 6.50': {
        Description: 'Ceviche',
        Price: 6.50
    }
};

var bot = new builder.UniversalBot (connector, [
    function (session) {
        builder.Prompts.text(session, '¡Hola! Bienvenido a su servicio de comunal delivery... ¿Cómo te llamas?')
    },
    function (session, results) {
        store.name = results.response;
        session.send('Hola, %s', store.name)
        builder.Prompts.choice(session, '¿Para hoy nuestro menu del dia es?:', dinnerMenu, { listStyle: builder.ListStyle.button });
    },function(session, results) {
        store.option = results.response.entity;

        var order = dinnerMenu[store.option];
        var msg = `Tu ordenastes un ${order.Description} y tiene un costo de $${order.Price}.`;
        builder.Prompts.text(session, '¿Donde lo entrego?');
    }, function (session, results) {
        store.where = results.response;

        var msg = store.name +  ', tu pedido sera entregado en un una hora en: ' + store.where  + ' ... gracias por preferir nuestro servicio';
        session.send(msg)
        session.endDialog();
    }
])
```

### Caso 3: Delivery incluyendo más flujos de conversación

En este ejemplo veremos el mismo del caso 2, incluyendo más opciones de selección.

```js
var builder = require ('botbuilder')
var restify = require ('restify')

var server = restify.createServer()
server.listen (3978, function () {
    console.log ('%s escuchando en %s', server.name, server.url)
})

var connector = new builder.ChatConnector ({
    appId: '',
    appPassword: ''
})

server.post ('/api/messages', connector.listen())

var store = {
    name : '',
    option : '',
    where: '',
}


var serviceList = {
    'Extra': {
        dialogId: 'extras',
    },
    'Menú del día': {
        dialogId: 'menus',
    },
    'Postres': {
        dialogId: 'postres',
    }
};

var bot = new builder.UniversalBot (connector, [
    function (session) {
        builder.Prompts.text(session, '¡Hola! Bienvenido a su servicio de comunal delivery... ¿Cómo te llamas?')
    },
    function (session, results) {
        store.name = results.response;
        session.send('Hola, %s', store.name)
        builder.Prompts.choice(session, 'Nuestros servicios son:', serviceList, { listStyle: builder.ListStyle.button });
    },
    function (session, results) {
        var option = results.response.entity;
        var order = serviceList[option];
        session.beginDialog( order.dialogId )
    },
    function (session, results) {
        var msg =  `Sr(x):  ${store.name}, su pedido es  (${store.option}) será entregado en ${store.where} en una hora aprox.`;
        session.endDialog('%s!', msg);
    }
]);


// This dialog help the user order dinner to be delivered to their hotel room.
var menuOptions = {
    'Menú 1 (Sopa de casa & Arroz con pollo) - S/.9.99 ': {
        Description: 'Sopa de casa & Arroz con pollo',
        Price: 9.99
    },
    'Menú 2 (Ensalada &  Picante de frejolito) - S/.9.99': {
        Description: 'Ensalada & Picante de frejolito',
        Price: 9.99
    },
    'Menú 3 (Palta rellena & Seco de Res) - S/.9.99 ': {
        Description: 'Palta rellena & Seco de Res',
        Price: 9.99
    }
};

var extraOptions = {
    'Lomo Montado - S/.15.00': {
        Description: 'Lomo Montado',
        Price: 15.00
    },
    'Lomo Saltado - S/.14.00': {
        Description: 'Lomo Saltado',
        Price: 14.00
    },
    'Ceviche - S/.20.00': {
        Description: 'Ceviche',
        Price: 20.00
    }
};

var postreOptions = {
    'Helado - S/. 4.99': {
        Description: 'Helado',
        Price: 4.99
    },
    'Suspiro a la limeña - S/. 6.89': {
        Description: 'Suspiro a la limeña',
        Price: 6.89
    },
    'Torta de chocolate - S/. 6.50': {
        Description: 'Torta de chocolate',
        Price: 6.50
    }
};

bot.dialog('extras', [
    function(session) {
         builder.Prompts.choice(session, '¿Para hoy nuestro menú del día es?:', extraOptions, { listStyle: builder.ListStyle.button });
    },function(session, results) {
        store.option = results.response.entity;
        var order = extraOptions[results.response.entity];
        var msg = `Tú ordenastes un ${order.Description} y tiene un costo de $${order.Price}.`;
        builder.Prompts.text(session, '¿Dónde lo entrego?');
    }, function (session, results) {
        store.where = results.response;
        session.endDialogWithResult(results);
    }
])

bot.dialog('menus', [
    function(session) {
        builder.Prompts.choice(session, '¿Para hoy nuestro menú del día es?:', menuOptions, { listStyle: builder.ListStyle.button });
    },function(session, results) {
        store.option = results.response.entity;
        var order = menuOptions[results.response.entity];
        var msg = `Tú ordenastes un ${order.Description} y tiene un costo de $${order.Price}.`;
        builder.Prompts.text(session, '¿Dónde lo entrego?');
    }, function (session, results) {
        store.where = results.response;
        session.endDialogWithResult(results);
    }
])

bot.dialog('postres', [
    function(session) {
        builder.Prompts.choice(session, '¿Para hoy nuestro menú del día es?:', postreOptions, { listStyle: builder.ListStyle.button });
    },function(session, results) {
        store.option = results.response.entity;
        var order = postreOptions[results.response.entity];
        var msg = `Tu ordenastes un ${order.Description} y tiene un costo de $${order.Price}.`;
        builder.Prompts.text(session, '¿Donde lo entrego?');
    }, function (session, results) {
        store.where = results.response;
        session.endDialogWithResult(results);
    }
])
```