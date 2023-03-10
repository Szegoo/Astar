// This file is part of Astar.

// Copyright (C) 2019-2023 Stake Technologies Pte.Ltd.
// SPDX-License-Identifier: GPL-3.0-or-later

// Astar is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Astar is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Astar. If not, see <http://www.gnu.org/licenses/>.

#![cfg_attr(not(feature = "std"), no_std)]

use codec::{Decode, Encode};
use frame_support::weights::Weight;
use sp_runtime::{traits::Member, RuntimeDebug};
use sp_std::prelude::*;

// Polkadot imports
use xcm::latest::prelude::*;
use xcm_builder::{
    Account32Hash, AccountId32Aliases, AllowKnownQueryResponses, AllowSubscriptionsFrom,
    AllowTopLevelPaidExecutionFrom, AllowUnpaidExecutionFrom, ConvertedConcreteAssetId,
    CurrencyAdapter, EnsureXcmOrigin, FixedWeightBounds, FungiblesAdapter, IsConcrete,
    LocationInverter, ParentAsSuperuser, ParentIsPreset, RelayChainAsNative, NonFungiblesAdapter,
    SiblingParachainAsNative, SiblingParachainConvertsVia, SignedAccountId32AsNative,
    SignedToAccountId32, SovereignSignedViaLocation, TakeWeightCredit, UsingComponents, NoChecking,
    NonFungiblesTransferAdapter, NonFungiblesMutateAdapter, NonFungiblesQueryAdapter,
};
use xcm_executor::{traits::JustTry, Config, XcmExecutor};

parameter_types! {
	pub const RelayNetwork: Option<NetworkId> = None;
}

#[derive(PartialEq, Eq, Clone, Encode, Decode, RuntimeDebug, scale_info::TypeInfo)]
pub struct NftAdapter;

impl NonFungiblesMutateAdapter for NftAdapter {
    // fn transfer(
    //     from: &MultiLocation,
    //     to: &MultiLocation,
    //     asset: &MultiAsset,
    //     amount: u128,
    // ) -> Result<(), XcmError> {
    //     Ok(())
    // }

    // fn mint(
    //     to: &MultiLocation,
    //     asset: &MultiAsset,
    //     amount: u128,
    // ) -> Result<(), XcmError> {
    //     Ok(())
    // }

    // fn burn(
    //     from: &MultiLocation,
    //     asset: &MultiAsset,
    //     amount: u128,
    // ) -> Result<(), XcmError> {
    //     Ok(())
    // }
}

impl NonFungiblesQueryAdapter for NftAdapter {
    // fn balance(
    //     who: &MultiLocation,
    //     asset: &MultiAsset,
    // ) -> Result<u128, XcmError> {
    //     Ok(0)
    // }
}

impl NonFungiblesTransferAdapter for NftAdapter {
    // fn transfer(
    //     from: &MultiLocation,
    //     to: &MultiLocation,
    //     asset: &MultiAsset,
    //     amount: u128,
    // ) -> Result<(), XcmError> {
    //     Ok(())
    // }
}

pub type SovereignAccountOf = (
    SiblingParachainConvertsVia<ParaId, AccountId>,
    AccountId32Aliases<RelayNetwork, AccountId>,
    ParentIsPreset<AccountId>,
);

/// Means for transacting non-fungibles assets
pub type NonFungiblesTransactor = NonFungiblesAdapter<
	NftAdapter,
	ConvertedConcreteId<MultiLocation, AssetInstance, JustTry, JustTry>,
	SovereignAccountOf,
	AccountId,
	NoChecking,
	(),
>;


