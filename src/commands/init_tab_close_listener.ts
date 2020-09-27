import { publish } from '../background/app';

import { UpdateTabDetailsCommand } from './update_tab_details';

export function handleTabClosed(
  tabId: number,
  removeInfo: chrome.tabs.TabRemoveInfo
) {
  publish(new UpdateTabDetailsCommand(tabId, null));
}

export class InitTabCloseListenerCommand {
  async execute() {
    chrome.tabs.onRemoved.addListener(
      module.hot ? (...args) => handleTabClosed(...args) : handleTabClosed
    );
  }
}
