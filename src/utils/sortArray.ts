const sortArray = (items: any[], sort: string, direction: string): any[] => {
  switch (sort) {
    case 'created': {
      const sortedItems = items.sort((a, b) => {
        const [aVal, bVal] = [a[sort], b[sort]][
          direction === 'ascending' ? 'slice' : 'reverse'
        ]();

        return new Date(aVal as Date).getTime() - new Date(bVal as Date).getTime();
      });

      return sortedItems;
    }

    default: {
      const sortedItems = items.sort((a, b) => {
        const [aVal, bVal] = [a[sort], b[sort]][
          direction === 'ascending' ? 'slice' : 'reverse'
        ]();

        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return aVal.localeCompare(bVal);
        }

        return Number(aVal) - Number(bVal);
      });

      return sortedItems;
    }
  }
};

export default sortArray;
