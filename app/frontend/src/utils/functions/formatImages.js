function formatImage(category, items) {
  console.log(category, items);

  const getThumbnailUrl = (category) => {
    switch (category) {
      case 'Geladeira':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-9zgcjJE3C5kfdIJiBRb88cqkf1dcgQ_Pw&usqp=CAU';
      case 'Celular':
        return 'https://cdn-icons-png.flaticon.com/512/0/191.png';
      case 'TV':
        return 'https://static.vecteezy.com/system/resources/previews/001/201/702/non_2x/tv-screen-png.png';
      default:
        return '';
    }
  };

  const updatedItems = items.map((item) => {
    if (item.thumbnail.startsWith('data:image')) {
      return {
        ...item,
        thumbnail: getThumbnailUrl(category),
      };
    }

    return item;
  });
  return updatedItems;
}

export default formatImage;
