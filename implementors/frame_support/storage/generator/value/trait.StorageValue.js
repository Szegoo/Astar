(function() {var implementors = {};
implementors["pallet_plasm_rewards"] = [{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_plasm_rewards/struct.HistoryDepth.html\" title=\"struct pallet_plasm_rewards::HistoryDepth\">HistoryDepth</a>","synthetic":false,"types":["pallet_plasm_rewards::HistoryDepth"]},{"text":"impl StorageValue&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_plasm_rewards/struct.BondedEras.html\" title=\"struct pallet_plasm_rewards::BondedEras\">BondedEras</a>","synthetic":false,"types":["pallet_plasm_rewards::BondedEras"]},{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_plasm_rewards/struct.CurrentEra.html\" title=\"struct pallet_plasm_rewards::CurrentEra\">CurrentEra</a>","synthetic":false,"types":["pallet_plasm_rewards::CurrentEra"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_plasm_rewards/trait.Config.html\" title=\"trait pallet_plasm_rewards::Config\">Config</a>&gt; StorageValue&lt;<a class=\"struct\" href=\"pallet_plasm_rewards/struct.ActiveEraInfo.html\" title=\"struct pallet_plasm_rewards::ActiveEraInfo\">ActiveEraInfo</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_plasm_rewards/trait.Config.html\" title=\"trait pallet_plasm_rewards::Config\">Config</a>&gt;::<a class=\"type\" href=\"pallet_plasm_rewards/trait.Config.html#associatedtype.Time\" title=\"type pallet_plasm_rewards::Config::Time\">Time</a> as Time&gt;::Moment&gt;&gt; for <a class=\"struct\" href=\"pallet_plasm_rewards/struct.ActiveEra.html\" title=\"struct pallet_plasm_rewards::ActiveEra\">ActiveEra</a>&lt;T&gt;","synthetic":false,"types":["pallet_plasm_rewards::ActiveEra"]},{"text":"impl StorageValue&lt;<a class=\"enum\" href=\"pallet_plasm_rewards/enum.Forcing.html\" title=\"enum pallet_plasm_rewards::Forcing\">Forcing</a>&gt; for <a class=\"struct\" href=\"pallet_plasm_rewards/struct.ForceEra.html\" title=\"struct pallet_plasm_rewards::ForceEra\">ForceEra</a>","synthetic":false,"types":["pallet_plasm_rewards::ForceEra"]}];
implementors["pallet_plasm_validator"] = [{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_plasm_validator/struct.UntreatedEra.html\" title=\"struct pallet_plasm_validator::UntreatedEra\">UntreatedEra</a>","synthetic":false,"types":["pallet_plasm_validator::UntreatedEra"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_plasm_validator/trait.Config.html\" title=\"trait pallet_plasm_validator::Config\">Config</a>&gt; StorageValue&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;T as Config&gt;::AccountId, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_plasm_validator/struct.Validators.html\" title=\"struct pallet_plasm_validator::Validators\">Validators</a>&lt;T&gt;","synthetic":false,"types":["pallet_plasm_validator::Validators"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()