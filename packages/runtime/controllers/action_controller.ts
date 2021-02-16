import { ReportEmptyCommand } from '../commands/report_empty';
import { ReportReadyCommand } from '../commands/report_ready';
import { supportsHiddenAction } from '../services/env/env_service';
import * as debug from '../util/debug';
import * as mediator from '../util/mediator';

mediator.subscribe(ReportEmptyCommand, async function ({ tabId }, defaultIcon) {
  if (!supportsHiddenAction) {
    await Promise.all([
      browser.pageAction.setPopup({ tabId, popup: 'popup.html' }),
      browser.pageAction.setIcon({ tabId, ...defaultIcon }),
      browser.pageAction.show(tabId),
    ]);
  }

  debug.log(`Tab#${tabId}: Empty Report command done`);
});

mediator.subscribe(ReportReadyCommand, async function ({ tabId }, report) {
  const promises = [
    browser.pageAction.setPopup({ tabId, popup: 'popup.html?tab=' + tabId }),
    browser.pageAction.show(tabId),
  ];

  // FIXME: implement localhost detection
  if (!report.isEmpty) {
    promises.push(
      report.icon.then((icon) => browser.pageAction.setIcon({ tabId, ...icon }))
    );

    const title =
      browser.i18n.getMessage('ext_name') + ':\n' + report.countryName;
    browser.pageAction.setTitle({ tabId, title });
  }

  await Promise.all(promises);

  debug.log(`Tab#${tabId}: Report Ready command done`);
});