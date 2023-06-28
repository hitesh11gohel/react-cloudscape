import React from "react";
import Table, { TableProps } from "@cloudscape-design/components/table";
import { useCollection } from "@cloudscape-design/collection-hooks";
import { IComment } from "../types";
import { Header, Pagination } from "@cloudscape-design/components";
import { useAppProvider } from "../contexts/AppContext";

const columnDefinitions: TableProps<IComment>["columnDefinitions"] = [
  {
    header: "Id",
    cell: ({ id }) => id,
    width: 75,
    minWidth: 75,
    sortingField: "id",
  },
  {
    header: "Name",
    cell: ({ name }) => name,
    width: 350,
    minWidth: 100,
    sortingField: "name",
  },
  {
    header: "Email",
    cell: ({ email }) => email,
    width: 300,
    minWidth: 100,
    sortingField: "email",
  },
  {
    header: "Body",
    cell: ({ body }) => body,
    width: 250,
    minWidth: 125,
    sortingField: "body",
  },
];

const CustomTable = () => {
  const { comments } = useAppProvider();

  const {
    items,
    // filterProps,
    // filteredItemsCount,
    paginationProps,
    collectionProps,
  } = useCollection<IComment>(comments || [], {
    filtering: {},
    pagination: { pageSize: 15 },
    sorting: { defaultState: { sortingColumn: columnDefinitions[0] } },
    selection: {},
  });

  return (
    <Table<IComment>
      variant="embedded"
      stripedRows
      {...collectionProps}
      items={items}
      columnDefinitions={columnDefinitions}
      stickyHeader={true}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        itemSelectionLabel: ({ selectedItems }, item) => {
          const isItemSelected = selectedItems.filter(
            (i) => i.name === item.name
          ).length;
          return `${item.name} is ${isItemSelected ? "" : "not "}selected`;
        },
        tableLabel: "Comments table",
      }}
      header={
        <Header
          variant="awsui-h1-sticky"
          counter={`(${items.length * paginationProps.currentPageIndex}/${
            comments?.length
          })`}
        >
          Comments
        </Header>
      }
      resizableColumns={true}
      pagination={<Pagination {...paginationProps} />}
    />
  );
};

export default CustomTable;
