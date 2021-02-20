import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

recycle = ["paper",
    "soda", 
    "can", 
    "cardboard",
    "container",
    "glass",
    "metal",
    "tin",
    "aluminum",
    "steel",
    "cans",
    "batteries",
    "phones",
    "clothes",
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
    "cerealbox"
]

compost = [
    "plant",
    "fruit", 
    "banana",
    "leaves",
    "hay:"
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
    "feather"
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
    "eggcartons",
    "light bulbs"
]

@app.route('/', methods = ['GET'])
def home():
    return "<h1>CycleScan</h1>"

@app.route('/api/recycle/all', methods=['GET'])
def api_recycle():
    return jsonify(recycle)

@app.route('/api/compost/all', methods=['GET'])
def api_compost():
    return jsonify(compost)

@app.route('/api/trash/all', methods=['GET'])
def api_trash():
    return jsonify(trash)

@app.route('/api/resources/object', methods=['GET']) #add ?obj='object name' to see what needs to be done with the object
def api_action():
    if 'obj' in request.args:
        obj = (request.args.get('obj').lower())
    else:
        return "Error: No object field provided. Please specify an object."

    results = []
    if obj in recycle:
        return "Recycle"
    elif obj in compost:
        return "Compost"
    elif obj in trash:
        return "Trash"
    else:
        return "Object not found"

app.run()