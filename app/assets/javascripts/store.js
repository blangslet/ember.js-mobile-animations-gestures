App.Adapter = DS.RESTAdapter.extend();

DS.RESTAdapter.map('App.Post', {
  comments: { embedded: 'load' }
});

App.RESTSerializer = DS.RESTSerializer.extend({
});

App.Store = DS.Store.extend({
  adapter: App.Adapter.create({
    serializer: App.RESTSerializer
  })
});

