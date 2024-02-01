$('.myTable').DataTable({
  ajax: {
    url: 'https://jsonplaceholder.typicode.com/users',
    dataSrc: '',
  },
  columns: [
    { data: 'id' },
    { data: 'name' },
    { data: 'email' },
    { data: 'username' },
    { data: 'address.city' },
  ],
});
