const { reactive } = Vue

const store = reactive(
    {
        Server: {
            online: false,
            Connect()
            {
                //const wsUri = "wss://portail.ra-cci.net/";
                const wsUri = "ws://localhost/";
                const websocket = new WebSocket(wsUri);

                websocket.onopen = () => {
                    store.Server.online = true
                }

                websocket.onmessage = (e) => {
                    console.log('Got a message')
                    console.log(e.data);
                }

                websocket.onclose = function(e) {  
                    store.Server.online = false
                    setTimeout(function() {
                        store.Server.Connect()
                    }, 1000);
                }

                websocket.onerror = function(err) {
                    store.Server.online = false
                };
            }

        },
        DB: {
            instance: null,
            Open: () => {
                let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
                let open = indexedDB.open("database", 1);

                open.onsuccess = function(event) {
                    store.DB.instance = event.target.result;
                    store.DB.Boats.Update()
                };

                open.onupgradeneeded = function() {
                    store.DB.instance = open.result;
                    store.DB.instance.createObjectStore("boats", {keyPath: "id", autoIncrement: true });
                };
            },
            Boats: {
                All: [],
                Add: (boat) =>
                {
                    let addedBoat = boat ? boat : {}
                    let transaction = store.DB.instance.transaction(['boats'], 'readwrite');
                    let objectStore = transaction.objectStore('boats');
                    
                    let request = objectStore.add(addedBoat);

                    request.onsuccess = function(event) {
                        store.DB.Boats.Update()
                    };

                    request.onerror = function() {
                        console.log('Error adding boat');
                    };
                },
                Update: () =>
                {
                    let transaction = store.DB.instance.transaction(['boats'], 'readwrite');
                    let objectStore = transaction.objectStore('boats');
                    let request = objectStore.getAll()

                    request.onsuccess = function(event) {
                        store.DB.Boats.All = event.target.result
                    };

                    request.onerror = function() {
                        console.log('Error listing Boats');
                    };
                }
            }
        }
    }
)

store.Server.Connect()
store.DB.Open()
