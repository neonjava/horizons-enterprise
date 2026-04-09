/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("contact_submissions");

  const existing = collection.fields.getByName("phone");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("phone"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "phone",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("contact_submissions");
  collection.fields.removeByName("phone");
  return app.save(collection);
})
