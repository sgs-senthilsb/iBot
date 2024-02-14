import { BrowserContext, type Page, test, TestInfo } from '@playwright/test'
import { Workbook } from 'exceljs'
import { runSheet, runSheetEachTest } from '../src/actions'
import { IFmgr } from "../src/ifmgr";
import {
  ACTION, ACTION_FORMAT, COMMENT_FORMAT,
  DATA, FILE, humanNowDateTime, LOCATOR, PRINT_FORMAT,
  SHEET, TRACE, TRACE_FORMAT, BASEURL, USERID, PASSWORD
} from '../src/consts'
import { logAll, logSheetClose, parseInts, SHEET_TIMER, TOTAL_SUMMARY, TOTAL_TIMER } from '../src/lib'



let pag: Page;
let ctx: BrowserContext;

const wb = new Workbook();
const vars = {};
const ifmgr = new IFmgr();

test.describe.configure({ mode: 'serial' });

test.describe('iBot Tests', () => {

  test.beforeAll(async ({ browser }) => {
    // called when a new worker process begin
    if (pag) {
      // page already created, skip
      return;
    }

    logAll('Before iBot Tests...')
    logAll('NOW:', humanNowDateTime())
    logAll('FILE:', FILE)
    logAll('SHEET:', SHEET)
    logAll('BASEURL:', BASEURL)
    logAll('USERID:', USERID)
    logAll('PASSWORD:', PASSWORD)

    logAll('LOCATOR:', LOCATOR)
    logAll('ACTION:', ACTION)
    logAll('DATA:', DATA)
    logAll('ACTION_FORMAT:', ACTION_FORMAT)
    logAll('PRINT_FORMAT:', PRINT_FORMAT)
    logAll('COMMENT_FORMAT:', COMMENT_FORMAT)

    logAll('TRACE_FORMAT:', TRACE_FORMAT)
    logAll('DEBUG_TRACE:', TRACE)
    TOTAL_TIMER.start()
    await wb.xlsx.readFile(FILE!)

    // on first call, create a new page
    pag = await browser.newPage();
    ctx = pag.context();
  });

  test.afterAll(async () => {
    logAll('After iBot Tests...')
    logAll('----')
    logAll('TOTAL TIME:', TOTAL_TIMER.end())
    logAll('TOTAL ACTIONS:', TOTAL_SUMMARY.actions)
    logAll('---------- xxxx ----------')
    logAll()
    //pag = page;
  })
  //Placeholder for the generated code 
  test.describe('Run Sheet TenantAdmin',()=>{
                  logAll()
                  logAll('Running sheet: TenantAdmin - 131 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('TenantAdmin  -- 002-url', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 2, 2, vars)
                })
                            
                
                test('TenantAdmin  -- 003-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 3, 3, vars)
                })
                            
                
                test('TenantAdmin  -- 004-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 4, 4, vars)
                })
                            
                
                test('TenantAdmin  -- 005-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 5, 5, vars)
                })
                            
                
                test('TenantAdmin  -- 006-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 6, 6, vars)
                })
                            
                
                test('TenantAdmin  -- 007-wait', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 7, 7, vars)
                })
                            
                
                test('TenantAdmin  -- 008-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 8, 8, vars)
                })
                            
                
                test('TenantAdmin  -- 009-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 9, 10, vars)
                })
                            
                
                test('TenantAdmin  -- 011-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 11, 11, vars)
                })
                            
                
                test('TenantAdmin  -- 012-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 12, 12, vars)
                })
                            
                
                test('TenantAdmin  -- 013-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 13, 13, vars)
                })
                            
                
                test('TenantAdmin  -- 014-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 14, 15, vars)
                })
                            
                
                test('TenantAdmin  -- 016-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 16, 16, vars)
                })
                            
                
                test('TenantAdmin  -- 017-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 17, 17, vars)
                })
                            
                
                test('TenantAdmin  -- 018-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 18, 18, vars)
                })
                            
                
                test('TenantAdmin  -- 019-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 19, 19, vars)
                })
                            
                
                test('TenantAdmin  -- 020-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 20, 21, vars)
                })
                            
                
                test('TenantAdmin  -- 022-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 22, 22, vars)
                })
                            
                
                test('TenantAdmin  -- 023-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 23, 23, vars)
                })
                            
                
                test('TenantAdmin  -- 024-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 24, 24, vars)
                })
                            
                
                test('TenantAdmin  -- 025-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 25, 26, vars)
                })
                            
                
                test('TenantAdmin  -- 027-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 27, 27, vars)
                })
                            
                
                test('TenantAdmin  -- 028-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 28, 28, vars)
                })
                            
                
                test('TenantAdmin  -- 029-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 29, 29, vars)
                })
                            
                
                test('TenantAdmin  -- 030-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 30, 31, vars)
                })
                            
                
                test('TenantAdmin  -- 032-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 32, 32, vars)
                })
                            
                
                test('TenantAdmin  -- 033-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 33, 33, vars)
                })
                            
                
                test('TenantAdmin  -- 034-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 34, 34, vars)
                })
                            
                
                test('TenantAdmin  -- 035-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 35, 36, vars)
                })
                            
                
                test('TenantAdmin  -- 037-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 37, 37, vars)
                })
                            
                
                test('TenantAdmin  -- 038-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 38, 38, vars)
                })
                            
                
                test('TenantAdmin  -- 039-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 39, 39, vars)
                })
                            
                
                test('TenantAdmin  -- 040-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 40, 41, vars)
                })
                            
                
                test('TenantAdmin  -- 042-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 42, 42, vars)
                })
                            
                
                test('TenantAdmin  -- 043-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 43, 43, vars)
                })
                            
                
                test('TenantAdmin  -- 044-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 44, 44, vars)
                })
                            
                
                test('TenantAdmin  -- 045-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 45, 46, vars)
                })
                            
                
                test('TenantAdmin  -- 047-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 47, 47, vars)
                })
                            
                
                test('TenantAdmin  -- 048-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 48, 48, vars)
                })
                            
                
                test('TenantAdmin  -- 049-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 49, 49, vars)
                })
                            
                
                test('TenantAdmin  -- 050-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 50, 51, vars)
                })
                            
                
                test('TenantAdmin  -- 052-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 52, 52, vars)
                })
                            
                
                test('TenantAdmin  -- 053-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 53, 53, vars)
                })
                            
                
                test('TenantAdmin  -- 054-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 54, 54, vars)
                })
                            
                
                test('TenantAdmin  -- 055-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 55, 56, vars)
                })
                            
                
                test('TenantAdmin  -- 057-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 57, 57, vars)
                })
                            
                
                test('TenantAdmin  -- 058-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 58, 58, vars)
                })
                            
                
                test('TenantAdmin  -- 059-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 59, 59, vars)
                })
                            
                
                test('TenantAdmin  -- 060-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 60, 61, vars)
                })
                            
                
                test('TenantAdmin  -- 062-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 62, 62, vars)
                })
                            
                
                test('TenantAdmin  -- 063-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 63, 63, vars)
                })
                            
                
                test('TenantAdmin  -- 064-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 64, 64, vars)
                })
                            
                
                test('TenantAdmin  -- 065-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 65, 66, vars)
                })
                            
                
                test('TenantAdmin  -- 067-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 67, 67, vars)
                })
                            
                
                test('TenantAdmin  -- 068-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 68, 68, vars)
                })
                            
                
                test('TenantAdmin  -- 069-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 69, 69, vars)
                })
                            
                
                test('TenantAdmin  -- 070-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 70, 71, vars)
                })
                            
                
                test('TenantAdmin  -- 072-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 72, 72, vars)
                })
                            
                
                test('TenantAdmin  -- 073-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 73, 73, vars)
                })
                            
                
                test('TenantAdmin  -- 074-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 74, 74, vars)
                })
                            
                
                test('TenantAdmin  -- 075-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 75, 76, vars)
                })
                            
                
                test('TenantAdmin  -- 077-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 77, 77, vars)
                })
                            
                
                test('TenantAdmin  -- 078-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 78, 78, vars)
                })
                            
                
                test('TenantAdmin  -- 079-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 79, 79, vars)
                })
                            
                
                test('TenantAdmin  -- 080-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 80, 81, vars)
                })
                            
                
                test('TenantAdmin  -- 082-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 82, 82, vars)
                })
                            
                
                test('TenantAdmin  -- 083-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 83, 83, vars)
                })
                            
                
                test('TenantAdmin  -- 084-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 84, 84, vars)
                })
                            
                
                test('TenantAdmin  -- 085-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 85, 86, vars)
                })
                            
                
                test('TenantAdmin  -- 087-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 87, 87, vars)
                })
                            
                
                test('TenantAdmin  -- 088-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 88, 88, vars)
                })
                            
                
                test('TenantAdmin  -- 089-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 89, 89, vars)
                })
                            
                
                test('TenantAdmin  -- 090-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 90, 91, vars)
                })
                            
                
                test('TenantAdmin  -- 092-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 92, 92, vars)
                })
                            
                
                test('TenantAdmin  -- 093-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 93, 93, vars)
                })
                            
                
                test('TenantAdmin  -- 094-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 94, 94, vars)
                })
                            
                
                test('TenantAdmin  -- 095-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 95, 96, vars)
                })
                            
                
                test('TenantAdmin  -- 097-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 97, 97, vars)
                })
                            
                
                test('TenantAdmin  -- 098-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 98, 98, vars)
                })
                            
                
                test('TenantAdmin  -- 099-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 99, 99, vars)
                })
                            
                
                test('TenantAdmin  -- 100-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 100, 101, vars)
                })
                            
                
                test('TenantAdmin  -- 102-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 102, 102, vars)
                })
                            
                
                test('TenantAdmin  -- 103-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 103, 103, vars)
                })
                            
                
                test('TenantAdmin  -- 104-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 104, 104, vars)
                })
                            
                
                test('TenantAdmin  -- 105-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 105, 106, vars)
                })
                            
                
                test('TenantAdmin  -- 107-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 107, 107, vars)
                })
                            
                
                test('TenantAdmin  -- 108-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 108, 108, vars)
                })
                            
                
                test('TenantAdmin  -- 109-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 109, 109, vars)
                })
                            
                
                test('TenantAdmin  -- 110-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 110, 111, vars)
                })
                            
                
                test('TenantAdmin  -- 112-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 112, 112, vars)
                })
                            
                
                test('TenantAdmin  -- 113-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 113, 113, vars)
                })
                            
                
                test('TenantAdmin  -- 114-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 114, 114, vars)
                })
                            
                
                test('TenantAdmin  -- 115-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 115, 116, vars)
                })
                            
                
                test('TenantAdmin  -- 117-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 117, 117, vars)
                })
                            
                
                test('TenantAdmin  -- 118-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 118, 118, vars)
                })
                            
                
                test('TenantAdmin  -- 119-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 119, 119, vars)
                })
                            
                
                test('TenantAdmin  -- 120-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 120, 121, vars)
                })
                            
                
                test('TenantAdmin  -- 122-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 122, 122, vars)
                })
                            
                
                test('TenantAdmin  -- 123-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 123, 123, vars)
                })
                            
                
                test('TenantAdmin  -- 124-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 124, 125, vars)
                })
                            
                
                test('TenantAdmin  -- 126-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 126, 126, vars)
                })
                            
                
                test('TenantAdmin  -- 127-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 127, 127, vars)
                })
                            
                
                test('TenantAdmin  -- 128-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 128, 128, vars)
                })
                            
                
                test('TenantAdmin  -- 129-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 129, 129, vars)
                })
                            
                
                test('TenantAdmin  -- 130-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 130, 130, vars)
                })
                            
                
                test('TenantAdmin  -- 131-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('TenantAdmin'), pag, ctx, testInfo, ifmgr, 131, 131, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet Executive',()=>{
                  logAll()
                  logAll('Running sheet: Executive - 124 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('Executive  -- 002-url', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 2, 2, vars)
                })
                            
                
                test('Executive  -- 003-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 3, 3, vars)
                })
                            
                
                test('Executive  -- 004-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 4, 4, vars)
                })
                            
                
                test('Executive  -- 005-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 5, 5, vars)
                })
                            
                
                test('Executive  -- 006-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 6, 6, vars)
                })
                            
                
                test('Executive  -- 007-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 7, 7, vars)
                })
                            
                
                test('Executive  -- 008-if', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 8, 11, vars)
                })
                            
                
                test('Executive  -- 012-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 12, 12, vars)
                })
                            
                
                test('Executive  -- 013-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 13, 13, vars)
                })
                            
                
                test('Executive  -- 014-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 14, 14, vars)
                })
                            
                
                test('Executive  -- 015-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 15, 15, vars)
                })
                            
                
                test('Executive  -- 016-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 16, 16, vars)
                })
                            
                
                test('Executive  -- 017-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 17, 17, vars)
                })
                            
                
                test('Executive  -- 018-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 18, 18, vars)
                })
                            
                
                test('Executive  -- 019-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 19, 19, vars)
                })
                            
                
                test('Executive  -- 020-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 20, 20, vars)
                })
                            
                
                test('Executive  -- 021-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 21, 21, vars)
                })
                            
                
                test('Executive  -- 022-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 22, 22, vars)
                })
                            
                
                test('Executive  -- 023-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 23, 23, vars)
                })
                            
                
                test('Executive  -- 024-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 24, 24, vars)
                })
                            
                
                test('Executive  -- 025-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 25, 25, vars)
                })
                            
                
                test('Executive  -- 026-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 26, 26, vars)
                })
                            
                
                test('Executive  -- 027-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 27, 27, vars)
                })
                            
                
                test('Executive  -- 028-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 28, 28, vars)
                })
                            
                
                test('Executive  -- 029-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 29, 29, vars)
                })
                            
                
                test('Executive  -- 030-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 30, 30, vars)
                })
                            
                
                test('Executive  -- 031-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 31, 31, vars)
                })
                            
                
                test('Executive  -- 032-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 32, 32, vars)
                })
                            
                
                test('Executive  -- 033-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 33, 33, vars)
                })
                            
                
                test('Executive  -- 034-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 34, 34, vars)
                })
                            
                
                test('Executive  -- 035-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 35, 35, vars)
                })
                            
                
                test('Executive  -- 036-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 36, 36, vars)
                })
                            
                
                test('Executive  -- 037-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 37, 37, vars)
                })
                            
                
                test('Executive  -- 038-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 38, 38, vars)
                })
                            
                
                test('Executive  -- 039-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 39, 39, vars)
                })
                            
                
                test('Executive  -- 040-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 40, 40, vars)
                })
                            
                
                test('Executive  -- 041-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 41, 41, vars)
                })
                            
                
                test('Executive  -- 042-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 42, 42, vars)
                })
                            
                
                test('Executive  -- 043-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 43, 43, vars)
                })
                            
                
                test('Executive  -- 044-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 44, 44, vars)
                })
                            
                
                test('Executive  -- 045-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 45, 45, vars)
                })
                            
                
                test('Executive  -- 046-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 46, 46, vars)
                })
                            
                
                test('Executive  -- 047-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 47, 47, vars)
                })
                            
                
                test('Executive  -- 048-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 48, 48, vars)
                })
                            
                
                test('Executive  -- 049-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 49, 49, vars)
                })
                            
                
                test('Executive  -- 050-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 50, 50, vars)
                })
                            
                
                test('Executive  -- 051-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 51, 51, vars)
                })
                            
                
                test('Executive  -- 052-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 52, 52, vars)
                })
                            
                
                test('Executive  -- 053-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 53, 53, vars)
                })
                            
                
                test('Executive  -- 054-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 54, 54, vars)
                })
                            
                
                test('Executive  -- 055-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 55, 55, vars)
                })
                            
                
                test('Executive  -- 056-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 56, 56, vars)
                })
                            
                
                test('Executive  -- 057-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 57, 57, vars)
                })
                            
                
                test('Executive  -- 058-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 58, 58, vars)
                })
                            
                
                test('Executive  -- 059-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 59, 59, vars)
                })
                            
                
                test('Executive  -- 060-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 60, 60, vars)
                })
                            
                
                test('Executive  -- 061-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 61, 61, vars)
                })
                            
                
                test('Executive  -- 062-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 62, 62, vars)
                })
                            
                
                test('Executive  -- 063-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 63, 63, vars)
                })
                            
                
                test('Executive  -- 064-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 64, 64, vars)
                })
                            
                
                test('Executive  -- 065-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 65, 65, vars)
                })
                            
                
                test('Executive  -- 066-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 66, 66, vars)
                })
                            
                
                test('Executive  -- 067-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 67, 67, vars)
                })
                            
                
                test('Executive  -- 068-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 68, 68, vars)
                })
                            
                
                test('Executive  -- 069-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 69, 69, vars)
                })
                            
                
                test('Executive  -- 070-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 70, 70, vars)
                })
                            
                
                test('Executive  -- 071-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 71, 71, vars)
                })
                            
                
                test('Executive  -- 072-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 72, 72, vars)
                })
                            
                
                test('Executive  -- 073-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 73, 73, vars)
                })
                            
                
                test('Executive  -- 074-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 74, 74, vars)
                })
                            
                
                test('Executive  -- 075-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 75, 75, vars)
                })
                            
                
                test('Executive  -- 076-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 76, 76, vars)
                })
                            
                
                test('Executive  -- 077-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 77, 77, vars)
                })
                            
                
                test('Executive  -- 078-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 78, 78, vars)
                })
                            
                
                test('Executive  -- 079-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 79, 79, vars)
                })
                            
                
                test('Executive  -- 080-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 80, 80, vars)
                })
                            
                
                test('Executive  -- 081-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 81, 81, vars)
                })
                            
                
                test('Executive  -- 082-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 82, 82, vars)
                })
                            
                
                test('Executive  -- 083-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 83, 83, vars)
                })
                            
                
                test('Executive  -- 084-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 84, 84, vars)
                })
                            
                
                test('Executive  -- 085-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 85, 85, vars)
                })
                            
                
                test('Executive  -- 086-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 86, 86, vars)
                })
                            
                
                test('Executive  -- 087-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 87, 87, vars)
                })
                            
                
                test('Executive  -- 088-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 88, 88, vars)
                })
                            
                
                test('Executive  -- 089-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 89, 89, vars)
                })
                            
                
                test('Executive  -- 090-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 90, 90, vars)
                })
                            
                
                test('Executive  -- 091-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 91, 91, vars)
                })
                            
                
                test('Executive  -- 092-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 92, 92, vars)
                })
                            
                
                test('Executive  -- 093-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 93, 93, vars)
                })
                            
                
                test('Executive  -- 094-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 94, 94, vars)
                })
                            
                
                test('Executive  -- 095-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 95, 95, vars)
                })
                            
                
                test('Executive  -- 096-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 96, 96, vars)
                })
                            
                
                test('Executive  -- 097-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 97, 97, vars)
                })
                            
                
                test('Executive  -- 098-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 98, 98, vars)
                })
                            
                
                test('Executive  -- 099-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 99, 99, vars)
                })
                            
                
                test('Executive  -- 100-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 100, 100, vars)
                })
                            
                
                test('Executive  -- 101-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 101, 101, vars)
                })
                            
                
                test('Executive  -- 102-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 102, 102, vars)
                })
                            
                
                test('Executive  -- 103-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 103, 103, vars)
                })
                            
                
                test('Executive  -- 104-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 104, 104, vars)
                })
                            
                
                test('Executive  -- 105-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 105, 105, vars)
                })
                            
                
                test('Executive  -- 106-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 106, 106, vars)
                })
                            
                
                test('Executive  -- 107-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 107, 107, vars)
                })
                            
                
                test('Executive  -- 108-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 108, 108, vars)
                })
                            
                
                test('Executive  -- 109-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 109, 109, vars)
                })
                            
                
                test('Executive  -- 110-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 110, 110, vars)
                })
                            
                
                test('Executive  -- 111-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 111, 111, vars)
                })
                            
                
                test('Executive  -- 112-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 112, 112, vars)
                })
                            
                
                test('Executive  -- 113-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 113, 113, vars)
                })
                            
                
                test('Executive  -- 114-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 114, 114, vars)
                })
                            
                
                test('Executive  -- 115-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 115, 115, vars)
                })
                            
                
                test('Executive  -- 116-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 116, 116, vars)
                })
                            
                
                test('Executive  -- 117-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 117, 117, vars)
                })
                            
                
                test('Executive  -- 118-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 118, 118, vars)
                })
                            
                
                test('Executive  -- 119-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 119, 119, vars)
                })
                            
                
                test('Executive  -- 120-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 120, 120, vars)
                })
                            
                
                test('Executive  -- 121-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 121, 121, vars)
                })
                            
                
                test('Executive  -- 122-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 122, 122, vars)
                })
                            
                
                test('Executive  -- 123-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 123, 123, vars)
                })
                            
                
                test('Executive  -- 124-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('Executive'), pag, ctx, testInfo, ifmgr, 124, 124, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet RestaurantManager',()=>{
                  logAll()
                  logAll('Running sheet: RestaurantManager - 142 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('RestaurantManager  -- 002-url', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 2, 2, vars)
                })
                            
                
                test('RestaurantManager  -- 003-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 3, 3, vars)
                })
                            
                
                test('RestaurantManager  -- 004-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 4, 4, vars)
                })
                            
                
                test('RestaurantManager  -- 005-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 5, 5, vars)
                })
                            
                
                test('RestaurantManager  -- 006-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 6, 6, vars)
                })
                            
                
                test('RestaurantManager  -- 007-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 7, 7, vars)
                })
                            
                
                test('RestaurantManager  -- 008-if', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 8, 11, vars)
                })
                            
                
                test('RestaurantManager  -- 012-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 12, 12, vars)
                })
                            
                
                test('RestaurantManager  -- 013-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 13, 13, vars)
                })
                            
                
                test('RestaurantManager  -- 014-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 14, 14, vars)
                })
                            
                
                test('RestaurantManager  -- 015-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 15, 15, vars)
                })
                            
                
                test('RestaurantManager  -- 016-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 16, 16, vars)
                })
                            
                
                test('RestaurantManager  -- 017-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 17, 17, vars)
                })
                            
                
                test('RestaurantManager  -- 018-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 18, 18, vars)
                })
                            
                
                test('RestaurantManager  -- 019-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 19, 19, vars)
                })
                            
                
                test('RestaurantManager  -- 020-key:enter', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 20, 20, vars)
                })
                            
                
                test('RestaurantManager  -- 021-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 21, 21, vars)
                })
                            
                
                test('RestaurantManager  -- 022-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 22, 22, vars)
                })
                            
                
                test('RestaurantManager  -- 023-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 23, 23, vars)
                })
                            
                
                test('RestaurantManager  -- 024-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 24, 24, vars)
                })
                            
                
                test('RestaurantManager  -- 025-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 25, 25, vars)
                })
                            
                
                test('RestaurantManager  -- 026-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 26, 26, vars)
                })
                            
                
                test('RestaurantManager  -- 027-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 27, 27, vars)
                })
                            
                
                test('RestaurantManager  -- 028-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 28, 28, vars)
                })
                            
                
                test('RestaurantManager  -- 029-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 29, 29, vars)
                })
                            
                
                test('RestaurantManager  -- 030-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 30, 30, vars)
                })
                            
                
                test('RestaurantManager  -- 031-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 31, 31, vars)
                })
                            
                
                test('RestaurantManager  -- 032-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 32, 32, vars)
                })
                            
                
                test('RestaurantManager  -- 033-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 33, 33, vars)
                })
                            
                
                test('RestaurantManager  -- 034-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 34, 34, vars)
                })
                            
                
                test('RestaurantManager  -- 035-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 35, 35, vars)
                })
                            
                
                test('RestaurantManager  -- 036-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 36, 36, vars)
                })
                            
                
                test('RestaurantManager  -- 037-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 37, 37, vars)
                })
                            
                
                test('RestaurantManager  -- 038-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 38, 38, vars)
                })
                            
                
                test('RestaurantManager  -- 039-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 39, 39, vars)
                })
                            
                
                test('RestaurantManager  -- 040-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 40, 40, vars)
                })
                            
                
                test('RestaurantManager  -- 041-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 41, 41, vars)
                })
                            
                
                test('RestaurantManager  -- 042-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 42, 42, vars)
                })
                            
                
                test('RestaurantManager  -- 043-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 43, 43, vars)
                })
                            
                
                test('RestaurantManager  -- 044-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 44, 44, vars)
                })
                            
                
                test('RestaurantManager  -- 045-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 45, 45, vars)
                })
                            
                
                test('RestaurantManager  -- 046-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 46, 46, vars)
                })
                            
                
                test('RestaurantManager  -- 047-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 47, 47, vars)
                })
                            
                
                test('RestaurantManager  -- 048-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 48, 48, vars)
                })
                            
                
                test('RestaurantManager  -- 049-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 49, 49, vars)
                })
                            
                
                test('RestaurantManager  -- 050-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 50, 50, vars)
                })
                            
                
                test('RestaurantManager  -- 051-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 51, 51, vars)
                })
                            
                
                test('RestaurantManager  -- 052-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 52, 52, vars)
                })
                            
                
                test('RestaurantManager  -- 053-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 53, 53, vars)
                })
                            
                
                test('RestaurantManager  -- 054-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 54, 54, vars)
                })
                            
                
                test('RestaurantManager  -- 055-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 55, 55, vars)
                })
                            
                
                test('RestaurantManager  -- 056-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 56, 56, vars)
                })
                            
                
                test('RestaurantManager  -- 057-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 57, 57, vars)
                })
                            
                
                test('RestaurantManager  -- 058-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 58, 58, vars)
                })
                            
                
                test('RestaurantManager  -- 059-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 59, 59, vars)
                })
                            
                
                test('RestaurantManager  -- 060-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 60, 60, vars)
                })
                            
                
                test('RestaurantManager  -- 061-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 61, 61, vars)
                })
                            
                
                test('RestaurantManager  -- 062-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 62, 62, vars)
                })
                            
                
                test('RestaurantManager  -- 063-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 63, 63, vars)
                })
                            
                
                test('RestaurantManager  -- 064-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 64, 64, vars)
                })
                            
                
                test('RestaurantManager  -- 065-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 65, 65, vars)
                })
                            
                
                test('RestaurantManager  -- 066-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 66, 66, vars)
                })
                            
                
                test('RestaurantManager  -- 067-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 67, 67, vars)
                })
                            
                
                test('RestaurantManager  -- 068-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 68, 68, vars)
                })
                            
                
                test('RestaurantManager  -- 069-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 69, 69, vars)
                })
                            
                
                test('RestaurantManager  -- 070-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 70, 70, vars)
                })
                            
                
                test('RestaurantManager  -- 071-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 71, 71, vars)
                })
                            
                
                test('RestaurantManager  -- 072-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 72, 72, vars)
                })
                            
                
                test('RestaurantManager  -- 073-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 73, 73, vars)
                })
                            
                
                test('RestaurantManager  -- 074-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 74, 74, vars)
                })
                            
                
                test('RestaurantManager  -- 075-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 75, 75, vars)
                })
                            
                
                test('RestaurantManager  -- 076-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 76, 76, vars)
                })
                            
                
                test('RestaurantManager  -- 077-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 77, 77, vars)
                })
                            
                
                test('RestaurantManager  -- 078-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 78, 78, vars)
                })
                            
                
                test('RestaurantManager  -- 079-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 79, 79, vars)
                })
                            
                
                test('RestaurantManager  -- 080-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 80, 80, vars)
                })
                            
                
                test('RestaurantManager  -- 081-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 81, 81, vars)
                })
                            
                
                test('RestaurantManager  -- 082-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 82, 82, vars)
                })
                            
                
                test('RestaurantManager  -- 083-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 83, 83, vars)
                })
                            
                
                test('RestaurantManager  -- 084-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 84, 84, vars)
                })
                            
                
                test('RestaurantManager  -- 085-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 85, 85, vars)
                })
                            
                
                test('RestaurantManager  -- 086-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 86, 86, vars)
                })
                            
                
                test('RestaurantManager  -- 087-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 87, 87, vars)
                })
                            
                
                test('RestaurantManager  -- 088-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 88, 88, vars)
                })
                            
                
                test('RestaurantManager  -- 089-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 89, 89, vars)
                })
                            
                
                test('RestaurantManager  -- 090-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 90, 90, vars)
                })
                            
                
                test('RestaurantManager  -- 091-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 91, 91, vars)
                })
                            
                
                test('RestaurantManager  -- 092-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 92, 92, vars)
                })
                            
                
                test('RestaurantManager  -- 093-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 93, 93, vars)
                })
                            
                
                test('RestaurantManager  -- 094-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 94, 94, vars)
                })
                            
                
                test('RestaurantManager  -- 095-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 95, 95, vars)
                })
                            
                
                test('RestaurantManager  -- 096-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 96, 96, vars)
                })
                            
                
                test('RestaurantManager  -- 097-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 97, 97, vars)
                })
                            
                
                test('RestaurantManager  -- 098-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 98, 98, vars)
                })
                            
                
                test('RestaurantManager  -- 099-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 99, 99, vars)
                })
                            
                
                test('RestaurantManager  -- 100-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 100, 100, vars)
                })
                            
                
                test('RestaurantManager  -- 101-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 101, 101, vars)
                })
                            
                
                test('RestaurantManager  -- 102-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 102, 102, vars)
                })
                            
                
                test('RestaurantManager  -- 103-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 103, 103, vars)
                })
                            
                
                test('RestaurantManager  -- 104-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 104, 104, vars)
                })
                            
                
                test('RestaurantManager  -- 105-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 105, 105, vars)
                })
                            
                
                test('RestaurantManager  -- 106-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 106, 106, vars)
                })
                            
                
                test('RestaurantManager  -- 107-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 107, 107, vars)
                })
                            
                
                test('RestaurantManager  -- 108-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 108, 108, vars)
                })
                            
                
                test('RestaurantManager  -- 109-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 109, 109, vars)
                })
                            
                
                test('RestaurantManager  -- 110-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 110, 110, vars)
                })
                            
                
                test('RestaurantManager  -- 111-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 111, 111, vars)
                })
                            
                
                test('RestaurantManager  -- 112-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 112, 112, vars)
                })
                            
                
                test('RestaurantManager  -- 113-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 113, 113, vars)
                })
                            
                
                test('RestaurantManager  -- 114-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 114, 114, vars)
                })
                            
                
                test('RestaurantManager  -- 115-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 115, 115, vars)
                })
                            
                
                test('RestaurantManager  -- 116-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 116, 116, vars)
                })
                            
                
                test('RestaurantManager  -- 117-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 117, 117, vars)
                })
                            
                
                test('RestaurantManager  -- 118-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 118, 118, vars)
                })
                            
                
                test('RestaurantManager  -- 119-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 119, 119, vars)
                })
                            
                
                test('RestaurantManager  -- 120-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 120, 120, vars)
                })
                            
                
                test('RestaurantManager  -- 121-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 121, 121, vars)
                })
                            
                
                test('RestaurantManager  -- 122-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 122, 122, vars)
                })
                            
                
                test('RestaurantManager  -- 123-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 123, 123, vars)
                })
                            
                
                test('RestaurantManager  -- 124-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 124, 124, vars)
                })
                            
                
                test('RestaurantManager  -- 125-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 125, 125, vars)
                })
                            
                
                test('RestaurantManager  -- 126-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 126, 126, vars)
                })
                            
                
                test('RestaurantManager  -- 127-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 127, 127, vars)
                })
                            
                
                test('RestaurantManager  -- 128-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 128, 128, vars)
                })
                            
                
                test('RestaurantManager  -- 129-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 129, 129, vars)
                })
                            
                
                test('RestaurantManager  -- 130-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 130, 130, vars)
                })
                            
                
                test('RestaurantManager  -- 131-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 131, 131, vars)
                })
                            
                
                test('RestaurantManager  -- 132-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 132, 132, vars)
                })
                            
                
                test('RestaurantManager  -- 133-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 133, 133, vars)
                })
                            
                
                test('RestaurantManager  -- 134-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 134, 134, vars)
                })
                            
                
                test('RestaurantManager  -- 135-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 135, 135, vars)
                })
                            
                
                test('RestaurantManager  -- 136-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 136, 136, vars)
                })
                            
                
                test('RestaurantManager  -- 137-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 137, 137, vars)
                })
                            
                
                test('RestaurantManager  -- 138-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 138, 138, vars)
                })
                            
                
                test('RestaurantManager  -- 139-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 139, 139, vars)
                })
                            
                
                test('RestaurantManager  -- 140-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 140, 140, vars)
                })
                            
                
                test('RestaurantManager  -- 141-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 141, 141, vars)
                })
                            
                
                test('RestaurantManager  -- 142-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantManager'), pag, ctx, testInfo, ifmgr, 142, 142, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet InvoiceCapture',()=>{
                  logAll()
                  logAll('Running sheet: InvoiceCapture - 62 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('InvoiceCapture  -- 002-url', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 2, 2, vars)
                })
                            
                
                test('InvoiceCapture  -- 003-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 3, 3, vars)
                })
                            
                
                test('InvoiceCapture  -- 004-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 4, 4, vars)
                })
                            
                
                test('InvoiceCapture  -- 005-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 5, 5, vars)
                })
                            
                
                test('InvoiceCapture  -- 006-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 6, 6, vars)
                })
                            
                
                test('InvoiceCapture  -- 007-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 7, 7, vars)
                })
                            
                
                test('InvoiceCapture  -- 008-if', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 8, 11, vars)
                })
                            
                
                test('InvoiceCapture  -- 012-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 12, 12, vars)
                })
                            
                
                test('InvoiceCapture  -- 013-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 13, 13, vars)
                })
                            
                
                test('InvoiceCapture  -- 014-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 14, 14, vars)
                })
                            
                
                test('InvoiceCapture  -- 015-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 15, 15, vars)
                })
                            
                
                test('InvoiceCapture  -- 016-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 16, 16, vars)
                })
                            
                
                test('InvoiceCapture  -- 017-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 17, 17, vars)
                })
                            
                
                test('InvoiceCapture  -- 018-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 18, 18, vars)
                })
                            
                
                test('InvoiceCapture  -- 019-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 19, 19, vars)
                })
                            
                
                test('InvoiceCapture  -- 020-key:enter', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 20, 20, vars)
                })
                            
                
                test('InvoiceCapture  -- 021-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 21, 21, vars)
                })
                            
                
                test('InvoiceCapture  -- 022-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 22, 22, vars)
                })
                            
                
                test('InvoiceCapture  -- 023-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 23, 23, vars)
                })
                            
                
                test('InvoiceCapture  -- 024-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 24, 24, vars)
                })
                            
                
                test('InvoiceCapture  -- 025-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 25, 25, vars)
                })
                            
                
                test('InvoiceCapture  -- 026-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 26, 26, vars)
                })
                            
                
                test('InvoiceCapture  -- 027-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 27, 27, vars)
                })
                            
                
                test('InvoiceCapture  -- 028-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 28, 28, vars)
                })
                            
                
                test('InvoiceCapture  -- 029-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 29, 29, vars)
                })
                            
                
                test('InvoiceCapture  -- 030-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 30, 30, vars)
                })
                            
                
                test('InvoiceCapture  -- 031-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 31, 31, vars)
                })
                            
                
                test('InvoiceCapture  -- 032-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 32, 32, vars)
                })
                            
                
                test('InvoiceCapture  -- 033-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 33, 33, vars)
                })
                            
                
                test('InvoiceCapture  -- 034-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 34, 34, vars)
                })
                            
                
                test('InvoiceCapture  -- 035-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 35, 35, vars)
                })
                            
                
                test('InvoiceCapture  -- 036-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 36, 36, vars)
                })
                            
                
                test('InvoiceCapture  -- 037-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 37, 37, vars)
                })
                            
                
                test('InvoiceCapture  -- 038-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 38, 38, vars)
                })
                            
                
                test('InvoiceCapture  -- 039-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 39, 39, vars)
                })
                            
                
                test('InvoiceCapture  -- 040-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 40, 40, vars)
                })
                            
                
                test('InvoiceCapture  -- 041-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 41, 41, vars)
                })
                            
                
                test('InvoiceCapture  -- 042-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 42, 42, vars)
                })
                            
                
                test('InvoiceCapture  -- 043-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 43, 43, vars)
                })
                            
                
                test('InvoiceCapture  -- 044-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 44, 44, vars)
                })
                            
                
                test('InvoiceCapture  -- 045-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 45, 45, vars)
                })
                            
                
                test('InvoiceCapture  -- 046-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 46, 46, vars)
                })
                            
                
                test('InvoiceCapture  -- 047-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 47, 47, vars)
                })
                            
                
                test('InvoiceCapture  -- 048-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 48, 48, vars)
                })
                            
                
                test('InvoiceCapture  -- 049-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 49, 49, vars)
                })
                            
                
                test('InvoiceCapture  -- 050-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 50, 50, vars)
                })
                            
                
                test('InvoiceCapture  -- 051-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 51, 51, vars)
                })
                            
                
                test('InvoiceCapture  -- 052-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 52, 52, vars)
                })
                            
                
                test('InvoiceCapture  -- 053-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 53, 53, vars)
                })
                            
                
                test('InvoiceCapture  -- 054-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 54, 54, vars)
                })
                            
                
                test('InvoiceCapture  -- 055-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 55, 55, vars)
                })
                            
                
                test('InvoiceCapture  -- 056-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 56, 56, vars)
                })
                            
                
                test('InvoiceCapture  -- 057-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 57, 57, vars)
                })
                            
                
                test('InvoiceCapture  -- 058-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 58, 58, vars)
                })
                            
                
                test('InvoiceCapture  -- 059-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 59, 59, vars)
                })
                            
                
                test('InvoiceCapture  -- 060-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 60, 60, vars)
                })
                            
                
                test('InvoiceCapture  -- 061-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 61, 61, vars)
                })
                            
                
                test('InvoiceCapture  -- 062-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('InvoiceCapture'), pag, ctx, testInfo, ifmgr, 62, 62, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                
test.describe('Run Sheet RestaurantUser',()=>{
                  logAll()
                  logAll('Running sheet: RestaurantUser - 101 row(s)')
                  logAll('---- ---- ---- ----')
                  SHEET_TIMER.start()
                  
                test('RestaurantUser  -- 002-url', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 2, 2, vars)
                })
                            
                
                test('RestaurantUser  -- 003-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 3, 3, vars)
                })
                            
                
                test('RestaurantUser  -- 004-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 4, 4, vars)
                })
                            
                
                test('RestaurantUser  -- 005-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 5, 5, vars)
                })
                            
                
                test('RestaurantUser  -- 006-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 6, 6, vars)
                })
                            
                
                test('RestaurantUser  -- 007-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 7, 7, vars)
                })
                            
                
                test('RestaurantUser  -- 008-if', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 8, 11, vars)
                })
                            
                
                test('RestaurantUser  -- 012-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 12, 12, vars)
                })
                            
                
                test('RestaurantUser  -- 013-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 13, 13, vars)
                })
                            
                
                test('RestaurantUser  -- 014-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 14, 14, vars)
                })
                            
                
                test('RestaurantUser  -- 015-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 15, 15, vars)
                })
                            
                
                test('RestaurantUser  -- 016-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 16, 16, vars)
                })
                            
                
                test('RestaurantUser  -- 017-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 17, 17, vars)
                })
                            
                
                test('RestaurantUser  -- 018-keys', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 18, 18, vars)
                })
                            
                
                test('RestaurantUser  -- 019-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 19, 19, vars)
                })
                            
                
                test('RestaurantUser  -- 020-key:enter', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 20, 20, vars)
                })
                            
                
                test('RestaurantUser  -- 021-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 21, 21, vars)
                })
                            
                
                test('RestaurantUser  -- 022-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 22, 22, vars)
                })
                            
                
                test('RestaurantUser  -- 023-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 23, 23, vars)
                })
                            
                
                test('RestaurantUser  -- 024-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 24, 24, vars)
                })
                            
                
                test('RestaurantUser  -- 025-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 25, 25, vars)
                })
                            
                
                test('RestaurantUser  -- 026-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 26, 26, vars)
                })
                            
                
                test('RestaurantUser  -- 027-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 27, 27, vars)
                })
                            
                
                test('RestaurantUser  -- 028-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 28, 28, vars)
                })
                            
                
                test('RestaurantUser  -- 029-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 29, 29, vars)
                })
                            
                
                test('RestaurantUser  -- 030-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 30, 30, vars)
                })
                            
                
                test('RestaurantUser  -- 031-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 31, 31, vars)
                })
                            
                
                test('RestaurantUser  -- 032-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 32, 32, vars)
                })
                            
                
                test('RestaurantUser  -- 033-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 33, 33, vars)
                })
                            
                
                test('RestaurantUser  -- 034-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 34, 34, vars)
                })
                            
                
                test('RestaurantUser  -- 035-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 35, 35, vars)
                })
                            
                
                test('RestaurantUser  -- 036-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 36, 36, vars)
                })
                            
                
                test('RestaurantUser  -- 037-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 37, 37, vars)
                })
                            
                
                test('RestaurantUser  -- 038-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 38, 38, vars)
                })
                            
                
                test('RestaurantUser  -- 039-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 39, 39, vars)
                })
                            
                
                test('RestaurantUser  -- 040-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 40, 40, vars)
                })
                            
                
                test('RestaurantUser  -- 041-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 41, 41, vars)
                })
                            
                
                test('RestaurantUser  -- 042-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 42, 42, vars)
                })
                            
                
                test('RestaurantUser  -- 043-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 43, 43, vars)
                })
                            
                
                test('RestaurantUser  -- 044-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 44, 44, vars)
                })
                            
                
                test('RestaurantUser  -- 045-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 45, 45, vars)
                })
                            
                
                test('RestaurantUser  -- 046-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 46, 46, vars)
                })
                            
                
                test('RestaurantUser  -- 047-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 47, 47, vars)
                })
                            
                
                test('RestaurantUser  -- 048-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 48, 48, vars)
                })
                            
                
                test('RestaurantUser  -- 049-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 49, 49, vars)
                })
                            
                
                test('RestaurantUser  -- 050-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 50, 50, vars)
                })
                            
                
                test('RestaurantUser  -- 051-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 51, 51, vars)
                })
                            
                
                test('RestaurantUser  -- 052-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 52, 52, vars)
                })
                            
                
                test('RestaurantUser  -- 053-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 53, 53, vars)
                })
                            
                
                test('RestaurantUser  -- 054-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 54, 54, vars)
                })
                            
                
                test('RestaurantUser  -- 055-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 55, 55, vars)
                })
                            
                
                test('RestaurantUser  -- 056-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 56, 56, vars)
                })
                            
                
                test('RestaurantUser  -- 057-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 57, 57, vars)
                })
                            
                
                test('RestaurantUser  -- 058-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 58, 58, vars)
                })
                            
                
                test('RestaurantUser  -- 059-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 59, 59, vars)
                })
                            
                
                test('RestaurantUser  -- 060-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 60, 60, vars)
                })
                            
                
                test('RestaurantUser  -- 061-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 61, 61, vars)
                })
                            
                
                test('RestaurantUser  -- 062-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 62, 62, vars)
                })
                            
                
                test('RestaurantUser  -- 063-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 63, 63, vars)
                })
                            
                
                test('RestaurantUser  -- 064-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 64, 64, vars)
                })
                            
                
                test('RestaurantUser  -- 065-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 65, 65, vars)
                })
                            
                
                test('RestaurantUser  -- 066-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 66, 66, vars)
                })
                            
                
                test('RestaurantUser  -- 067-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 67, 67, vars)
                })
                            
                
                test('RestaurantUser  -- 068-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 68, 68, vars)
                })
                            
                
                test('RestaurantUser  -- 069-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 69, 69, vars)
                })
                            
                
                test('RestaurantUser  -- 070-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 70, 70, vars)
                })
                            
                
                test('RestaurantUser  -- 071-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 71, 71, vars)
                })
                            
                
                test('RestaurantUser  -- 072-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 72, 72, vars)
                })
                            
                
                test('RestaurantUser  -- 073-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 73, 73, vars)
                })
                            
                
                test('RestaurantUser  -- 074-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 74, 74, vars)
                })
                            
                
                test('RestaurantUser  -- 075-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 75, 75, vars)
                })
                            
                
                test('RestaurantUser  -- 076-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 76, 76, vars)
                })
                            
                
                test('RestaurantUser  -- 077-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 77, 77, vars)
                })
                            
                
                test('RestaurantUser  -- 078-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 78, 78, vars)
                })
                            
                
                test('RestaurantUser  -- 079-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 79, 79, vars)
                })
                            
                
                test('RestaurantUser  -- 080-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 80, 80, vars)
                })
                            
                
                test('RestaurantUser  -- 081-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 81, 81, vars)
                })
                            
                
                test('RestaurantUser  -- 082-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 82, 82, vars)
                })
                            
                
                test('RestaurantUser  -- 083-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 83, 83, vars)
                })
                            
                
                test('RestaurantUser  -- 084-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 84, 84, vars)
                })
                            
                
                test('RestaurantUser  -- 085-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 85, 85, vars)
                })
                            
                
                test('RestaurantUser  -- 086-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 86, 86, vars)
                })
                            
                
                test('RestaurantUser  -- 087-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 87, 87, vars)
                })
                            
                
                test('RestaurantUser  -- 088-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 88, 88, vars)
                })
                            
                
                test('RestaurantUser  -- 089-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 89, 89, vars)
                })
                            
                
                test('RestaurantUser  -- 090-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 90, 90, vars)
                })
                            
                
                test('RestaurantUser  -- 091-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 91, 91, vars)
                })
                            
                
                test('RestaurantUser  -- 092-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 92, 92, vars)
                })
                            
                
                test('RestaurantUser  -- 093-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 93, 93, vars)
                })
                            
                
                test('RestaurantUser  -- 094-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 94, 94, vars)
                })
                            
                
                test('RestaurantUser  -- 095-assert', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 95, 95, vars)
                })
                            
                
                test('RestaurantUser  -- 096-screenshot', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 96, 96, vars)
                })
                            
                
                test('RestaurantUser  -- 097-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 97, 97, vars)
                })
                            
                
                test('RestaurantUser  -- 098-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 98, 98, vars)
                })
                            
                
                test('RestaurantUser  -- 099-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 99, 99, vars)
                })
                            
                
                test('RestaurantUser  -- 100-click', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 100, 100, vars)
                })
                            
                
                test('RestaurantUser  -- 101-sleep', async({}, testInfo)=>{
                  await runSheetEachTest(wb.getWorksheet('RestaurantUser'), pag, ctx, testInfo, ifmgr, 101, 101, vars)
                })
                            
                
                  logSheetClose()
                  logAll() 
                })
                

})
