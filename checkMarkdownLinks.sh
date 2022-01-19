#!/bin/bash

hasError="false"

function throw() {
  exit 1
}

function checkLinkTypeWarnings() {
  RESULT_OUTPUT_FILE="$1"
  REMARK_COMMAND="$2"

  remark --use "$REMARK_COMMAND" -q ./src 2>&1 | tee "${RESULT_OUTPUT_FILE}"
  if grep -q 'warning' "${RESULT_OUTPUT_FILE}"; then
    hasError="true"
  fi

  rm "${RESULT_OUTPUT_FILE}"
}

checkLinkTypeWarnings "local-links-output.txt" "remark-validate-links"
checkLinkTypeWarnings "external-links-output.txt" "remark-lint-no-dead-urls"

if [[ $hasError == "true" ]]; then
  throw
fi