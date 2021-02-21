import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

recycle = [
    "paper",
    "soda", 
    "can", 
    "cardboard",
    "container",
    "glass",
    "tin",
    "aluminum",
    "steel",
    "cans",
    "batteries",
    "battery",
    "phone",
    "clothes",
    "marker",
    "clothing",
    "softplastics",
    "electronic",
    "cartons",
    "mail",
    "jar",
    "foil",
    "shampoo",
    "detergent",
    "lids",
    "metal",
    "cerealbox",
    "shoes",
    "dvd",
    "cd",
    "disk",
    "crayon",
    "pen",
    "razor",
    "toothbrush",
    "certridge",
    "backpack",
    "aerosol",
    "antiperspirant",
    "deodorant",
    "book",
    "carpet",
    "computer",
    "fireextinguisher",
    "glue",
    "hanger",
    "card",
    "nailclipper",
    "key",
    "leather",
    "makeup",
    "spring",
    "notebook",
    "stationary",
    "paint",
    "folder",
    "bottlecap",
    "plasticwrap",
    "post-it",
    "rug",
    "dispenser",
    "tinfoil",
    "pencil",
    "fabric",
    "umbrella",
    "tire",
    "wheel"
]

compost = [
    "plant",
    "fruit", 
    "banana",
    "leaves",
    "hay",
    "wine",
    "drycatfood",
    "drydogfood",
    "manure",
    "grass",
    "straw",
    "bedding",
    "eggshells",
    "coffeefilters",
    "coffeegrounds",
    "rice",
    "pasta",
    "pizzacrust",
    "peanutshells",
    "oatmeal",
    "cardboard",
    "toothpick",
    "tissue",
    "napkin",
    "cotton",
    "hair",
    "envelopes",
    "wood",
    "sawdust",
    "latex",
    "feather",
    "food",
    "eggcartons"
]

trash = [
    "wax",
    "bubblewrap",
    "packingpeanut",
    "window",
    "mirror",
    "ceramic",
    "papertowel",
    "paperplate",
    "pizzabox",
    "kitchenware",  
    "photographs",
    "polystyrene",
    "styrofoam",
    "chemicals",
    "plastictoys",
    "sportsequipment",
    "light bulbs",
    "magnet"
]

@app.route('/', methods = ['GET'])
def home():
    return "<h1>CycleScan API</h1>"

@app.route('/api/recycle/all', methods=['GET'])
def recycle():
    return jsonify(sorted(recycle))

@app.route('/api/compost/all', methods=['GET'])
def compost():
    return jsonify(sorted(compost))

@app.route('/api/trash/all', methods=['GET'])
def trash():
    return jsonify(sorted(trash))

@app.route('/api/search/object', methods=['GET']) #add ?obj='object name' to see what needs to be done with the object
def api_action():
    if 'obj' in request.args:
        obj = (request.args.get('obj').lower())
    else:
        return "Error: No object field provided. Please specify an object."

    if obj in recycle:
        return jsonify("Recyclable")
    elif obj in compost:
        return jsonify("Compostable")
    elif obj in trash:
        return jsonify("Trash")
    else:
        return "Object not found"

app.run()
