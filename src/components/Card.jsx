import { useState } from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { useAppProvider } from "../contexts/AppContext";

const CardComp = () => {
  const { vehicles } = useAppProvider();
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <Cards
      onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
      selectedItems={selectedItems}
      ariaLabels={{
        itemSelectionLabel: (e, n) => `select ${n.name}`,
        selectionGroupLabel: "Item selection",
      }}
      cardDefinition={{
        header: (e) => e.name,
        sections: [
          {
            id: "manufacturer",
            header: "Manufacturer",
            content: (e) => e.manufacturer,
          },
          { id: "type", header: "Type", content: (e) => e.type },
          { id: "color", header: "Color", content: (e) => e.color },
        ],
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
      items={vehicles}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="name"
      visibleSections={["manufacturer", "type", "color"]}
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box padding={{ bottom: "s" }} variant="p" color="inherit">
            No resources to display.
          </Box>
          <Button>Create resource</Button>
        </Box>
      }
      filter={<TextFilter filteringPlaceholder="Find resources" />}
      header={
        <Header
          counter={
            selectedItems.length ? "(" + selectedItems.length + "/10)" : "(10)"
          }
        >
          Vehicle Info
        </Header>
      }
      pagination={<Pagination currentPageIndex={1} pagesCount={2} />}
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 5, label: "5 resources" },
              { value: 10, label: "10 resources" },
            ],
          }}
          preferences={{
            pageSize: 10,
            visibleContent: ["manufacturer", "type", "color"],
          }}
          visibleContentPreference={{
            title: "Select visible content",
            options: [
              {
                label: "Main distribution properties",
                options: [
                  { id: "manufacturer", label: "Manufacturer" },
                  { id: "type", label: "Type" },
                  { id: "color", label: "Color" },
                ],
              },
            ],
          }}
        />
      }
    />
  );
};

export default CardComp;
