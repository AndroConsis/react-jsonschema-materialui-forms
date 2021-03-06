import React from "react";
import { Chip } from "@material-ui/core";

const SelectionBar = props => {
  const {
    isMultiselect,
    selectedOptions,
    selectionColumn,
    onDeleteChoice,
    primaryColumn,
    getChipDisplayText
  } = props;
  
  if (isMultiselect) {
    return (
      <React.Fragment>
        {selectedOptions && selectedOptions.map((value, key) => {
          let displayText = getChipDisplayText 
            ? getChipDisplayText(value[primaryColumn])
            : value[selectionColumn];
          if (displayText !== '' && displayText !== undefined && displayText !== null) {
            return (
              <Chip
                key={key}
                label={displayText}
                style={{ marginRight: 5, height: 30 }}
                onDelete={() => onDeleteChoice(value[selectionColumn])}
              />
            );
          }
          }
        )}
      </React.Fragment>
    );
  } else if (selectedOptions && selectedOptions[0]) {
    let displayText = getChipDisplayText 
      ? getChipDisplayText(selectedOptions[0][primaryColumn])
      : selectedOptions[0][selectionColumn];
    if (displayText !== '' && displayText !== undefined && displayText !== null) {
      return (
        <Chip
          label={displayText}
          style={{ marginRight: 5, height: 30 }}
          onDelete={() => onDeleteChoice(selectedOptions[0][selectionColumn])}
        />
      );
    }
  }

  return null;
};

export default SelectionBar;
