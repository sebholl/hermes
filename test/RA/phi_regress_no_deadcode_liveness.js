/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %hermes -O --target=HBC -dump-ra %s | %FileCheck %s --check-prefix=CHKRA --match-full-lines
// Ensure that phi node does not update deadcode liveness interval
function b(d=([[[[{z:[{}]}]]]]=arguments)) {}

//CHKRA-LABEL:function b#0#1(d)#2 : undefined
//CHKRA-NEXT:S{b#0#1()#2} = []
//CHKRA-LABEL:%BB1:
//CHKRA-NEXT:  {{.*}}  %17 = ReturnInst %1 : undefined
//CHKRA-LABEL:%BB68:
//CHKRA-NEXT:  $Reg16 @147 [empty]   %207 = IteratorCloseInst %5, false : boolean
//CHKRA-NEXT:  $Reg16 @148 [empty]   %208 = BranchInst %BB1
//CHKRA-LABEL:%BB7:
//CHKRA-NEXT:  $Reg2 @208 [empty]    %209 = IteratorCloseInst %5, true : boolean
//CHKRA-NEXT:  $Reg2 @209 [empty]    %210 = BranchInst %BB6
