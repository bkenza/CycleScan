import flask
from flask import request, jsonify, render_template
from threading import Thread


app = flask.Flask(__name__)
# app.config["DEBUG"] = True

r = "recyclable"
c = "compostable"
t = "trash"

item = [
    {"obj": "paper", "action": r},
    {"obj": "soda", "action": r},
    {"obj": "can", "action": r},
    {"obj": "cardboard", "action": r},
    {"obj": "container", "action": r},
    {"obj": "glass", "action": r},
    {"obj": "tin", "action": r},
    {"obj": "aluminum", "action": r},
    {"obj": "steel", "action": r},
    {"obj": "cans", "action": r},
    {"obj": "batteries", "action": r},
    {"obj": "battery", "action": r},
    {"obj": "phone", "action": r},
    {"obj": "clothes", "action": r},
    {"obj": "marker", "action": r},
    {"obj": "clothing", "action": r},
    {"obj": "softplastics", "action": r},
    {"obj": "electronic", "action": r},
    {"obj": "cartons", "action": r},
    {"obj": "mail", "action": r},
    {"obj": "jar", "action": r},
    {"obj": "foil", "action": r},
    {"obj": "shampoo", "action": r},
    {"obj": "detergent", "action": r},
    {"obj": "lids", "action": r},
    {"obj": "metal", "action": r},
    {"obj": "cerealbox", "action": r},
    {"obj": "shoes", "action": r},
    {"obj": "dvd", "action": r},
    {"obj": "cd", "action": r},
    {"obj": "disk", "action": r},
    {"obj": "crayon", "action": r},
    {"obj": "pen", "action": r},
    {"obj": "razor", "action": r},
    {"obj": "toothbrush", "action": r},
    {"obj": "certridge", "action": r},
    {"obj": "backpack", "action": r},
    {"obj": "aerosol", "action": r},
    {"obj": "antiperspirant", "action": r},
    {"obj": "deodorant", "action": r},
    {"obj": "book", "action": r},
    {"obj": "carpet", "action": r},
    {"obj": "computer", "action": r},
    {"obj": "fireextinguisher", "action": r},
    {"obj": "glue", "action": r},
    {"obj": "hanger", "action": r},
    {"obj": "card", "action": r},
    {"obj": "nailclipper", "action": r},
    {"obj": "key", "action": r},
    {"obj": "leather", "action": r},
    {"obj": "makeup", "action": r},
    {"obj": "spring", "action": r},
    {"obj": "notebook", "action": r},
    {"obj": "stationary", "action": r},
    {"obj": "paint", "action": r},
    {"obj": "folder", "action": r},
    {"obj": "bottlecap", "action": r},
    {"obj": "plasticwrap", "action": r},
    {"obj": "post-it", "action": r},
    {"obj": "rug", "action": r},
    {"obj": "dispenser", "action": r},
    {"obj": "tinfoil", "action": r},
    {"obj": "pencil", "action": r},
    {"obj": "fabric", "action": r},
    {"obj": "umbrella", "action": r},
    {"obj": "tire", "action": r},
    {"obj": "wheel", "action": r},
    {"obj": "plant", "action": c},
    {"obj": "fruit", "action": c},
    {"obj": "banana", "action": c},
    {"obj": "leaves", "action": c},
    {"obj": "hay", "action": c},
    {"obj": "wine", "action": c},
    {"obj": "drycatfood", "action": c},
    {"obj": "drydogfood", "action": c},
    {"obj": "manure", "action": c},
    {"obj": "grass", "action": c},
    {"obj": "straw", "action": c},
    {"obj": "bedding", "action": c},
    {"obj": "eggshells", "action": c},
    {"obj": "coffeefilters", "action": c},
    {"obj": "coffeegrounds", "action": c},
    {"obj": "rice", "action": c},
    {"obj": "pasta", "action": c},
    {"obj": "pizzacrust", "action": c},
    {"obj": "peanutshells", "action": c},
    {"obj": "oatmeal", "action": c},
    {"obj": "cardboard", "action": c},
    {"obj": "toothpick", "action": c},
    {"obj": "tissue", "action": c},
    {"obj": "napkin", "action": c},
    {"obj": "cotton", "action": c},
    {"obj": "hair", "action": c},
    {"obj": "envelopes", "action": c},
    {"obj": "wood", "action": c},
    {"obj": "sawdust", "action": c},
    {"obj": "latex", "action": c},
    {"obj": "feather", "action": c},
    {"obj": "food", "action": c},
    {"obj": "eggcartons", "action": c},
    {"obj": "wax", "action": t},
    {"obj": "bubblewrap", "action": t},
    {"obj": "packingpeanut", "action": t},
    {"obj": "window", "action": t},
    {"obj": "mirror", "action": t},
    {"obj": "ceramic", "action": t},
    {"obj": "papertowel", "action": t},
    {"obj": "paperplate", "action": t},
    {"obj": "pizzabox", "action": t},
    {"obj": "kitchenware", "action": t},
    {"obj": "photographs", "action": t},
    {"obj": "polystyrene", "action": t},
    {"obj": "styrofoam", "action": t},
    {"obj": "chemicals", "action": t},
    {"obj": "plastictoys", "action": t},
    {"obj": "sportsequipment", "action": t},
    {"obj": "light bulbs", "action": t},
    {"obj": "magnet", "action": t},
    {"obj": "hairtie", "action": r},
    {"obj": "stationary", "action": r},
    {"obj": "officesupplies", "action": r}
]


def run():
    app.run(host='0.0.0.0', port=8080)


def keep_alive():
    th = Thread(target=run)
    th.start()


@app.route('/', methods=['GET'])
def home():
    return "<h1>CycleScan API</h1><p>The CycleScan API receives a get request with an item name and performs a search in order to determine whether it is recyclable, compostable or neither.</p><h2>Endpoints:</h2><h3>Endpoint 1: Get all items</h3><p>https://GargantuanAffectionateCertifications.bkenza.repl.co/api/item/all</p><h3>Endpoint 2: Search for a specific item </h3><p>https://GargantuanAffectionateCertifications.bkenza.repl.co/api/search/object</p>"


@app.route('/api/item/all', methods=['GET'])
def api_item():
    return jsonify(item)


# add ?obj='object name' to see what needs to be done with the object
@app.route('/api/search/object', methods=['GET'])
def api_action():
    # If object is provided, assign it to a variable.
    # If no object is provided, display an error in the browser.
    if 'obj' in request.args:
        obj = (request.args['obj'])
    else:
        return "Error: No object field provided. Please specify an object."

    # Create an empty list for the results
    results = []

    # Loop through the data and match results that fit the requested object.
    for i in item:
        if i['obj'] == obj:
            results.append(i)

    # Use the jsonify function from Flask to convert the list of
    # Python dictionaries to the JSON format.
    return jsonify(results)


keep_alive()
